import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import type { ProtoGrpcType } from "./proto/random";
import type { TodoResponseList } from "./proto/randomPackage/TodoResponseList";
import readline from "readline";

const PORT = process.env.PORT || "8000";

const packageDef = protoLoader.loadSync(
    path.resolve( __dirname, "./proto/random.proto" )
);

const grpcObject = grpc.loadPackageDefinition( packageDef ) as unknown as ProtoGrpcType;
const client = new grpcObject.randomPackage.RandomService( `0.0.0.0:${PORT}`, grpc.credentials.createInsecure() );



const deadline = new Date();
deadline.setSeconds( deadline.getSeconds() + 5 );

client.waitForReady( deadline, ( error ) => {
    if ( error ) {
        console.error( `Client failed to connect: ${error.message}` );
        return;
    }


    onClientReady();




} );


function onClientReady() {
    console.log( "Client is ready and connected to the server." );
    // You can now make gRPC calls
    // client.GetRandomNumber({
    //     max: 1000,
    //     min: 1
    // }, (error, response) => {
    //     if (error) {
    //         console.error(`Error calling GetRandomNumber: ${error.message}`);
    //         return;
    //     }
    //     console.log(`Received random number: ${response?.randomNumber}`);
    // });

    // const stream = client.GetRandomNumberStream({
    //     max: 1000,
    //     min: 1
    // });
    // stream.on('data', (chunk) => {
    //     console.log(chunk);
    // });
    // stream.on('end', () => {
    //     console.log('Stream ended.');
    // });


    // const todoStream = client.TodoList();
    // setInterval( () => {
    //     const task = `Task ${Math.floor( Math.random() * 100 )}`;
    //     const completed = Math.random() > 0.5;
    //     todoStream.write( { task } );
    //     console.log( `Sent todo: ${task}, completed: ${completed}` );
    // }, 1000 );
    // todoStream.on( 'data', ( chunk: TodoResponseList ) => {
    //     if ( chunk?.todos ) {
    //         console.log( `Total todos received: ${chunk.todos.length}` );
    //         // lastest chunk
    //         console.log(`last :`,chunk.todos.at( chunk.todos.length - 1 ))
    //     } else {
    //         console.log( 'No todos received in this chunk.' );
    //     }
    // } );
    // todoStream.on( 'end', () => {
    //     console.log( 'Todo stream ended.' );
    // } );




     const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const username = process.argv[2]
  if (!username) console.error("No username, can't join chat"), process.exit()


  const metadata = new grpc.Metadata()
  metadata.set("username", username)
  const call = client.Chat(metadata)
  
  call.write({
    message: "register"
  })

  call.on("data", (chunk) => {
    console.log(`${chunk.username} ==> ${chunk.message}`)
  })

  rl.on("line", (line) => {
    if(line === "quit") {
      call.end()
    }else {
      call.write({
        message: line
      })
    }

  })



}
