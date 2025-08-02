import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import type { ProtoGrpcType } from "./proto/random";
import type { RandomServiceHandlers } from "./proto/randomPackage/RandomService"
import type { TodoResponseList } from "./proto/randomPackage/TodoResponseList";
import type { TodoResponse } from "./proto/randomPackage/TodoResponse";
import type { TodoRequest } from "./proto/randomPackage/TodoRequest";
import type { ChatRequest } from "./proto/randomPackage/ChatRequest";
import type { ChatResponse } from "./proto/randomPackage/ChatResponse";


const PORT = process.env.PORT || "8000";

const packageDef = protoLoader.loadSync(
    path.resolve( __dirname, "./proto/random.proto" )
);

const grpcObject = grpc.loadPackageDefinition( packageDef ) as unknown as ProtoGrpcType;
const randomPackage = grpcObject.randomPackage


function main() {
    const server = getServer();

    server.bindAsync(
        `0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
        ( error, port ) => {
            if ( error ) {
                console.error( `Error binding server: ${error.message}` );
                return;
            }
            console.log( `Server running at http://0.0.0:${port}` );
            // server.start(); // no need as now it gets started automatically
        } )

}

function getServer() {
    const todos: TodoResponse[] = [];
    const callObjByUsername = new Map<string, grpc.ServerDuplexStream<ChatRequest, ChatResponse>>()


    const server = new grpc.Server();
    server.addService( randomPackage.RandomService.service, {
        GetRandomNumber: ( req, res ) => {
            console.log( "Received request for random number" );
            console.log( req, res );

            const min = req.request.min || 1;
            const max = req.request.max || 1000;

            const randomNumber = Math.floor( Math.random() * ( max - min + 1 ) ) + min;

            console.log( `Generated random number: ${randomNumber}` );
            res( null, { randomNumber } );



        },
        GetRandomNumberStream: ( call ) => {
            console.log( "Received request for random number stream" );

            const min = call.request.min || 1;
            const max = call.request.max || 1000;

            const intervalId = setInterval(() => {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(`Generated random number: ${randomNumber}`);
                call.write({ randomNumber });
            }, 1000);
            // const randomNumber = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
            // console.log( `Generated random number: ${randomNumber}` );
            // call.write( { randomNumber } );

            // call.end();

            call.on('end', () => {
                clearInterval(intervalId);
                call.end();
            });
        },
        TodoList: (call) => {
            console.log("Received request for TodoList stream");

            call.on('data', (todoRequest:TodoRequest) => {
                console.log(`Received todo request: ${todoRequest.task}`);
                // Here you can process the todoRequest and send a response
                const todoResponse:TodoResponse = { task: todoRequest.task ?? "no", completed: false };
                todos.push(todoResponse);
                call.write({ todos }); // Wrap in an object as TodoResponseList
            });

            call.on('end', () => {
                console.log("TodoList stream ended");
                call.end();
            });
        },
            Chat: (call) => {
      call.on("data", (req) => {
        const username = call.metadata.get('username')[0] as string
        const msg = req.message
        console.log(username, req.message)


        for(let [user, usersCall] of callObjByUsername) {
          if(username !== user) {
            usersCall.write({
              username: username,
              message: msg
            })
          }
        }

        if (callObjByUsername.get(username) === undefined) {
          callObjByUsername.set(username, call)
        }
      })

      call.on("end", () => {
        const username = call.metadata.get('username')[0] as string
        callObjByUsername.delete(username)
        for(let [user, usersCall] of callObjByUsername) {
            usersCall.write({
              username: username,
              message: "Has Left the Chat!"
            })
        }
        console.log(`${username} is ending their chat session`)

        call.write({
          username: "Server",
          message: `See you later ${username}`
        })

        call.end()
      })

    }

    } as RandomServiceHandlers );

    return server;
}

main();