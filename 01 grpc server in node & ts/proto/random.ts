import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatRequest as _randomPackage_ChatRequest, ChatRequest__Output as _randomPackage_ChatRequest__Output } from './randomPackage/ChatRequest';
import type { ChatResponse as _randomPackage_ChatResponse, ChatResponse__Output as _randomPackage_ChatResponse__Output } from './randomPackage/ChatResponse';
import type { RandomRequest as _randomPackage_RandomRequest, RandomRequest__Output as _randomPackage_RandomRequest__Output } from './randomPackage/RandomRequest';
import type { RandomResponse as _randomPackage_RandomResponse, RandomResponse__Output as _randomPackage_RandomResponse__Output } from './randomPackage/RandomResponse';
import type { RandomServiceClient as _randomPackage_RandomServiceClient, RandomServiceDefinition as _randomPackage_RandomServiceDefinition } from './randomPackage/RandomService';
import type { TodoRequest as _randomPackage_TodoRequest, TodoRequest__Output as _randomPackage_TodoRequest__Output } from './randomPackage/TodoRequest';
import type { TodoResponse as _randomPackage_TodoResponse, TodoResponse__Output as _randomPackage_TodoResponse__Output } from './randomPackage/TodoResponse';
import type { TodoResponseList as _randomPackage_TodoResponseList, TodoResponseList__Output as _randomPackage_TodoResponseList__Output } from './randomPackage/TodoResponseList';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  randomPackage: {
    ChatRequest: MessageTypeDefinition<_randomPackage_ChatRequest, _randomPackage_ChatRequest__Output>
    ChatResponse: MessageTypeDefinition<_randomPackage_ChatResponse, _randomPackage_ChatResponse__Output>
    RandomRequest: MessageTypeDefinition<_randomPackage_RandomRequest, _randomPackage_RandomRequest__Output>
    RandomResponse: MessageTypeDefinition<_randomPackage_RandomResponse, _randomPackage_RandomResponse__Output>
    RandomService: SubtypeConstructor<typeof grpc.Client, _randomPackage_RandomServiceClient> & { service: _randomPackage_RandomServiceDefinition }
    TodoRequest: MessageTypeDefinition<_randomPackage_TodoRequest, _randomPackage_TodoRequest__Output>
    TodoResponse: MessageTypeDefinition<_randomPackage_TodoResponse, _randomPackage_TodoResponse__Output>
    TodoResponseList: MessageTypeDefinition<_randomPackage_TodoResponseList, _randomPackage_TodoResponseList__Output>
  }
}

