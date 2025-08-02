// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _randomPackage_ChatRequest, ChatRequest__Output as _randomPackage_ChatRequest__Output } from '../randomPackage/ChatRequest';
import type { ChatResponse as _randomPackage_ChatResponse, ChatResponse__Output as _randomPackage_ChatResponse__Output } from '../randomPackage/ChatResponse';
import type { RandomRequest as _randomPackage_RandomRequest, RandomRequest__Output as _randomPackage_RandomRequest__Output } from '../randomPackage/RandomRequest';
import type { RandomResponse as _randomPackage_RandomResponse, RandomResponse__Output as _randomPackage_RandomResponse__Output } from '../randomPackage/RandomResponse';
import type { TodoRequest as _randomPackage_TodoRequest, TodoRequest__Output as _randomPackage_TodoRequest__Output } from '../randomPackage/TodoRequest';
import type { TodoResponseList as _randomPackage_TodoResponseList, TodoResponseList__Output as _randomPackage_TodoResponseList__Output } from '../randomPackage/TodoResponseList';

export interface RandomServiceClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_ChatRequest, _randomPackage_ChatResponse__Output>;
  
  GetRandomNumber(argument: _randomPackage_RandomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  GetRandomNumber(argument: _randomPackage_RandomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  GetRandomNumber(argument: _randomPackage_RandomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  GetRandomNumber(argument: _randomPackage_RandomRequest, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  getRandomNumber(argument: _randomPackage_RandomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  getRandomNumber(argument: _randomPackage_RandomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  getRandomNumber(argument: _randomPackage_RandomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  getRandomNumber(argument: _randomPackage_RandomRequest, callback: grpc.requestCallback<_randomPackage_RandomResponse__Output>): grpc.ClientUnaryCall;
  
  GetRandomNumberStream(argument: _randomPackage_RandomRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomResponse__Output>;
  GetRandomNumberStream(argument: _randomPackage_RandomRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomResponse__Output>;
  getRandomNumberStream(argument: _randomPackage_RandomRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomResponse__Output>;
  getRandomNumberStream(argument: _randomPackage_RandomRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_TodoRequest, _randomPackage_TodoResponseList__Output>;
  TodoList(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_TodoRequest, _randomPackage_TodoResponseList__Output>;
  todoList(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_TodoRequest, _randomPackage_TodoResponseList__Output>;
  todoList(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_TodoRequest, _randomPackage_TodoResponseList__Output>;
  
}

export interface RandomServiceHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_randomPackage_ChatRequest__Output, _randomPackage_ChatResponse>;
  
  GetRandomNumber: grpc.handleUnaryCall<_randomPackage_RandomRequest__Output, _randomPackage_RandomResponse>;
  
  GetRandomNumberStream: grpc.handleServerStreamingCall<_randomPackage_RandomRequest__Output, _randomPackage_RandomResponse>;
  
  TodoList: grpc.handleBidiStreamingCall<_randomPackage_TodoRequest__Output, _randomPackage_TodoResponseList>;
  
}

export interface RandomServiceDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_randomPackage_ChatRequest, _randomPackage_ChatResponse, _randomPackage_ChatRequest__Output, _randomPackage_ChatResponse__Output>
  GetRandomNumber: MethodDefinition<_randomPackage_RandomRequest, _randomPackage_RandomResponse, _randomPackage_RandomRequest__Output, _randomPackage_RandomResponse__Output>
  GetRandomNumberStream: MethodDefinition<_randomPackage_RandomRequest, _randomPackage_RandomResponse, _randomPackage_RandomRequest__Output, _randomPackage_RandomResponse__Output>
  TodoList: MethodDefinition<_randomPackage_TodoRequest, _randomPackage_TodoResponseList, _randomPackage_TodoRequest__Output, _randomPackage_TodoResponseList__Output>
}
