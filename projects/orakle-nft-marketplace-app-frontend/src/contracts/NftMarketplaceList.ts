/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  AppStorageSchema,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "add_marketplace_to_list(uint64)uint64[]": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "remove_marketplace_from_list(uint64)uint64[]": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "read_marketplace_list()uint64[]": {
      "read_only": true,
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMubmZ0X21hcmtldHBsYWNlX2xpc3QuY29udHJhY3QuTmZ0TWFya2V0cGxhY2VMaXN0LmFwcHJvdmFsX3Byb2dyYW06CiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYm56IG1haW5fZW50cnlwb2ludEAyCiAgICBjYWxsc3ViIF9faW5pdF9fCgptYWluX2VudHJ5cG9pbnRAMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9uZnRfbWFya2V0cGxhY2VfbGlzdC9jb250cmFjdC5weTo4CiAgICAvLyBjbGFzcyBOZnRNYXJrZXRwbGFjZUxpc3QoQVJDNENvbnRyYWN0KToKICAgIHR4biBOdW1BcHBBcmdzCiAgICBieiBtYWluX2JhcmVfcm91dGluZ0A5CiAgICBtZXRob2QgImFkZF9tYXJrZXRwbGFjZV90b19saXN0KHVpbnQ2NCl1aW50NjRbXSIKICAgIG1ldGhvZCAicmVtb3ZlX21hcmtldHBsYWNlX2Zyb21fbGlzdCh1aW50NjQpdWludDY0W10iCiAgICBtZXRob2QgInJlYWRfbWFya2V0cGxhY2VfbGlzdCgpdWludDY0W10iCiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAwCiAgICBtYXRjaCBtYWluX2FkZF9tYXJrZXRwbGFjZV90b19saXN0X3JvdXRlQDQgbWFpbl9yZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0X3JvdXRlQDUgbWFpbl9yZWFkX21hcmtldHBsYWNlX2xpc3Rfcm91dGVANgogICAgZXJyIC8vIHJlamVjdCB0cmFuc2FjdGlvbgoKbWFpbl9hZGRfbWFya2V0cGxhY2VfdG9fbGlzdF9yb3V0ZUA0OgogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjEzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGlzIG5vdCBjcmVhdGluZwogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjgKICAgIC8vIGNsYXNzIE5mdE1hcmtldHBsYWNlTGlzdChBUkM0Q29udHJhY3QpOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgYnRvaQogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjEzCiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgY2FsbHN1YiBhZGRfbWFya2V0cGxhY2VfdG9fbGlzdAogICAgYnl0ZSAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50IDEKICAgIHJldHVybgoKbWFpbl9yZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0X3JvdXRlQDU6CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gaXMgbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6OAogICAgLy8gY2xhc3MgTmZ0TWFya2V0cGxhY2VMaXN0KEFSQzRDb250cmFjdCk6CiAgICB0eG5hIEFwcGxpY2F0aW9uQXJncyAxCiAgICBidG9pCiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MTgKICAgIC8vIEBhcmM0LmFiaW1ldGhvZCgpCiAgICBjYWxsc3ViIHJlbW92ZV9tYXJrZXRwbGFjZV9mcm9tX2xpc3QKICAgIGJ5dGUgMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludCAxCiAgICByZXR1cm4KCm1haW5fcmVhZF9tYXJrZXRwbGFjZV9saXN0X3JvdXRlQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MzEKICAgIC8vIEBhcmM0LmFiaW1ldGhvZChyZWFkb25seT1UcnVlKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGlzIG5vdCBjcmVhdGluZwogICAgY2FsbHN1YiByZWFkX21hcmtldHBsYWNlX2xpc3QKICAgIGJ5dGUgMHgxNTFmN2M3NQogICAgc3dhcAogICAgY29uY2F0CiAgICBsb2cKICAgIGludCAxCiAgICByZXR1cm4KCm1haW5fYmFyZV9yb3V0aW5nQDk6CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6OAogICAgLy8gY2xhc3MgTmZ0TWFya2V0cGxhY2VMaXN0KEFSQzRDb250cmFjdCk6CiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gcmVqZWN0IHRyYW5zYWN0aW9uCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGlzIGNyZWF0aW5nCiAgICBpbnQgMQogICAgcmV0dXJuCgoKLy8gc21hcnRfY29udHJhY3RzLm5mdF9tYXJrZXRwbGFjZV9saXN0LmNvbnRyYWN0Lk5mdE1hcmtldHBsYWNlTGlzdC5hZGRfbWFya2V0cGxhY2VfdG9fbGlzdChhcHBfaWQ6IHVpbnQ2NCkgLT4gYnl0ZXM6CmFkZF9tYXJrZXRwbGFjZV90b19saXN0OgogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjEzLTE0CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIGFkZF9tYXJrZXRwbGFjZV90b19saXN0KHNlbGYsIGFwcF9pZDogVUludDY0KSAtPiBhcHBfaWRfbGlzdDoKICAgIHByb3RvIDEgMQogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjE1CiAgICAvLyBzZWxmLm1hcmtldHBsYWNlX2xpc3QuYXBwZW5kKGFyYzQuVUludDY0KGFwcF9pZCkpCiAgICBpbnQgMAogICAgYnl0ZSAibWFya2V0cGxhY2VfbGlzdCIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgbWFya2V0cGxhY2VfbGlzdCBleGlzdHMKICAgIGV4dHJhY3QgMiAwCiAgICBmcmFtZV9kaWcgLTEKICAgIGl0b2IKICAgIGNvbmNhdAogICAgZHVwCiAgICBsZW4KICAgIGludCA4CiAgICAvCiAgICBpdG9iCiAgICBleHRyYWN0IDYgMAogICAgc3dhcAogICAgY29uY2F0CiAgICBieXRlICJtYXJrZXRwbGFjZV9saXN0IgogICAgc3dhcAogICAgYXBwX2dsb2JhbF9wdXQKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9uZnRfbWFya2V0cGxhY2VfbGlzdC9jb250cmFjdC5weToxNgogICAgLy8gcmV0dXJuIHNlbGYubWFya2V0cGxhY2VfbGlzdAogICAgaW50IDAKICAgIGJ5dGUgIm1hcmtldHBsYWNlX2xpc3QiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIG1hcmtldHBsYWNlX2xpc3QgZXhpc3RzCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMubmZ0X21hcmtldHBsYWNlX2xpc3QuY29udHJhY3QuTmZ0TWFya2V0cGxhY2VMaXN0LnJlbW92ZV9tYXJrZXRwbGFjZV9mcm9tX2xpc3QoYXBwX2lkOiB1aW50NjQpIC0+IGJ5dGVzOgpyZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0OgogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjE4LTE5CiAgICAvLyBAYXJjNC5hYmltZXRob2QoKQogICAgLy8gZGVmIHJlbW92ZV9tYXJrZXRwbGFjZV9mcm9tX2xpc3Qoc2VsZiwgYXBwX2lkOiBVSW50NjQpIC0+IGFwcF9pZF9saXN0OgogICAgcHJvdG8gMSAxCiAgICBpbnQgMAogICAgZHVwCiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MjAKICAgIC8vIG5ld19saXN0ID0gYXBwX2lkX2xpc3QoKQogICAgYnl0ZSAweDAwMDAKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9uZnRfbWFya2V0cGxhY2VfbGlzdC9jb250cmFjdC5weToyMQogICAgLy8gZm9yIGkgaW4gdXJhbmdlKHNlbGYubWFya2V0cGxhY2VfbGlzdC5sZW5ndGgpOgogICAgaW50IDAKICAgIGJ5dGUgIm1hcmtldHBsYWNlX2xpc3QiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIG1hcmtldHBsYWNlX2xpc3QgZXhpc3RzCiAgICBpbnQgMAogICAgZXh0cmFjdF91aW50MTYKICAgIGludCAwCgpyZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0X2Zvcl9oZWFkZXJAMToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9uZnRfbWFya2V0cGxhY2VfbGlzdC9jb250cmFjdC5weToyMQogICAgLy8gZm9yIGkgaW4gdXJhbmdlKHNlbGYubWFya2V0cGxhY2VfbGlzdC5sZW5ndGgpOgogICAgZnJhbWVfZGlnIDQKICAgIGZyYW1lX2RpZyAzCiAgICA8CiAgICBieiByZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0X2FmdGVyX2ZvckA3CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MjIKICAgIC8vIGN1cnJlbnRfYXBwX2lkID0gc2VsZi5tYXJrZXRwbGFjZV9saXN0W2ldCiAgICBpbnQgMAogICAgYnl0ZSAibWFya2V0cGxhY2VfbGlzdCIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgbWFya2V0cGxhY2VfbGlzdCBleGlzdHMKICAgIGR1cAogICAgaW50IDAKICAgIGV4dHJhY3RfdWludDE2CiAgICBmcmFtZV9kaWcgNAogICAgZHVwCiAgICB1bmNvdmVyIDIKICAgIDwKICAgIGFzc2VydCAvLyBJbmRleCBhY2Nlc3MgaXMgb3V0IG9mIGJvdW5kcwogICAgc3dhcAogICAgZXh0cmFjdCAyIDAKICAgIHN3YXAKICAgIGludCA4CiAgICAqCiAgICBpbnQgOAogICAgZXh0cmFjdDMKICAgIGR1cAogICAgZnJhbWVfYnVyeSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MjQKICAgIC8vIGlmIGN1cnJlbnRfYXBwX2lkICE9IGFwcF9pZDoKICAgIGZyYW1lX2RpZyAtMQogICAgaXRvYgogICAgYiE9CiAgICBmcmFtZV9kaWcgMgogICAgZnJhbWVfYnVyeSAxCiAgICBieiByZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0X2FmdGVyX2lmX2Vsc2VANAogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjI1CiAgICAvLyBuZXdfbGlzdC5hcHBlbmQoY3VycmVudF9hcHBfaWQpCiAgICBmcmFtZV9kaWcgMgogICAgZXh0cmFjdCAyIDAKICAgIGZyYW1lX2RpZyAwCiAgICBjb25jYXQKICAgIGR1cAogICAgbGVuCiAgICBpbnQgOAogICAgLwogICAgaXRvYgogICAgZXh0cmFjdCA2IDAKICAgIHN3YXAKICAgIGNvbmNhdAogICAgZnJhbWVfYnVyeSAxCgpyZW1vdmVfbWFya2V0cGxhY2VfZnJvbV9saXN0X2FmdGVyX2lmX2Vsc2VANDoKICAgIGZyYW1lX2RpZyAxCiAgICBmcmFtZV9idXJ5IDIKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9uZnRfbWFya2V0cGxhY2VfbGlzdC9jb250cmFjdC5weToyMQogICAgLy8gZm9yIGkgaW4gdXJhbmdlKHNlbGYubWFya2V0cGxhY2VfbGlzdC5sZW5ndGgpOgogICAgZnJhbWVfZGlnIDQKICAgIGludCAxCiAgICArCiAgICBmcmFtZV9idXJ5IDQKICAgIGIgcmVtb3ZlX21hcmtldHBsYWNlX2Zyb21fbGlzdF9mb3JfaGVhZGVyQDEKCnJlbW92ZV9tYXJrZXRwbGFjZV9mcm9tX2xpc3RfYWZ0ZXJfZm9yQDc6CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MjcKICAgIC8vIHNlbGYubWFya2V0cGxhY2VfbGlzdCA9IG5ld19saXN0LmNvcHkoKQogICAgYnl0ZSAibWFya2V0cGxhY2VfbGlzdCIKICAgIGZyYW1lX2RpZyAyCiAgICBhcHBfZ2xvYmFsX3B1dAogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjI5CiAgICAvLyByZXR1cm4gc2VsZi5tYXJrZXRwbGFjZV9saXN0CiAgICBpbnQgMAogICAgYnl0ZSAibWFya2V0cGxhY2VfbGlzdCIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgbWFya2V0cGxhY2VfbGlzdCBleGlzdHMKICAgIGZyYW1lX2J1cnkgMAogICAgcmV0c3ViCgoKLy8gc21hcnRfY29udHJhY3RzLm5mdF9tYXJrZXRwbGFjZV9saXN0LmNvbnRyYWN0Lk5mdE1hcmtldHBsYWNlTGlzdC5yZWFkX21hcmtldHBsYWNlX2xpc3QoKSAtPiBieXRlczoKcmVhZF9tYXJrZXRwbGFjZV9saXN0OgogICAgLy8gc21hcnRfY29udHJhY3RzL25mdF9tYXJrZXRwbGFjZV9saXN0L2NvbnRyYWN0LnB5OjMxLTMyCiAgICAvLyBAYXJjNC5hYmltZXRob2QocmVhZG9ubHk9VHJ1ZSkKICAgIC8vIGRlZiByZWFkX21hcmtldHBsYWNlX2xpc3Qoc2VsZikgLT4gYXBwX2lkX2xpc3Q6CiAgICBwcm90byAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9uZnRfbWFya2V0cGxhY2VfbGlzdC9jb250cmFjdC5weTozMwogICAgLy8gcmV0dXJuIHNlbGYubWFya2V0cGxhY2VfbGlzdAogICAgaW50IDAKICAgIGJ5dGUgIm1hcmtldHBsYWNlX2xpc3QiCiAgICBhcHBfZ2xvYmFsX2dldF9leAogICAgYXNzZXJ0IC8vIGNoZWNrIG1hcmtldHBsYWNlX2xpc3QgZXhpc3RzCiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMubmZ0X21hcmtldHBsYWNlX2xpc3QuY29udHJhY3QuTmZ0TWFya2V0cGxhY2VMaXN0Ll9faW5pdF9fKCkgLT4gdm9pZDoKX19pbml0X186CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MTAKICAgIC8vIGRlZiBfX2luaXRfXyhzZWxmKSAtPiBOb25lOgogICAgcHJvdG8gMCAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6MTEKICAgIC8vIHNlbGYubWFya2V0cGxhY2VfbGlzdCA9IGFwcF9pZF9saXN0KCkKICAgIGJ5dGUgIm1hcmtldHBsYWNlX2xpc3QiCiAgICBieXRlIDB4MDAwMAogICAgYXBwX2dsb2JhbF9wdXQKICAgIHJldHN1Ygo=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCgpzbWFydF9jb250cmFjdHMubmZ0X21hcmtldHBsYWNlX2xpc3QuY29udHJhY3QuTmZ0TWFya2V0cGxhY2VMaXN0LmNsZWFyX3N0YXRlX3Byb2dyYW06CiAgICAvLyBzbWFydF9jb250cmFjdHMvbmZ0X21hcmtldHBsYWNlX2xpc3QvY29udHJhY3QucHk6OAogICAgLy8gY2xhc3MgTmZ0TWFya2V0cGxhY2VMaXN0KEFSQzRDb250cmFjdCk6CiAgICBpbnQgMQogICAgcmV0dXJuCg=="
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {
        "marketplace_list": {
          "type": "bytes",
          "key": "marketplace_list"
        }
      },
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "NftMarketplaceList",
    "methods": [
      {
        "name": "add_marketplace_to_list",
        "args": [
          {
            "type": "uint64",
            "name": "app_id"
          }
        ],
        "returns": {
          "type": "uint64[]"
        }
      },
      {
        "name": "remove_marketplace_from_list",
        "args": [
          {
            "type": "uint64",
            "name": "app_id"
          }
        ],
        "returns": {
          "type": "uint64[]"
        }
      },
      {
        "name": "read_marketplace_list",
        "args": [],
        "returns": {
          "type": "uint64[]"
        }
      }
    ],
    "networks": {}
  },
  "bare_call_config": {
    "no_op": "CREATE"
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

export type IncludeSchema = {
  /**
   * Any overrides for the storage schema to request for the created app; by default the schema indicated by the app spec is used.
   */
  schema?: Partial<AppStorageSchema>
}

/**
 * Defines the types of available calls and state of the NftMarketplaceList smart contract.
 */
export type NftMarketplaceList = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'add_marketplace_to_list(uint64)uint64[]' | 'add_marketplace_to_list', {
      argsObj: {
        appId: bigint | number
      }
      argsTuple: [appId: bigint | number]
      returns: bigint[]
    }>
    & Record<'remove_marketplace_from_list(uint64)uint64[]' | 'remove_marketplace_from_list', {
      argsObj: {
        appId: bigint | number
      }
      argsTuple: [appId: bigint | number]
      returns: bigint[]
    }>
    & Record<'read_marketplace_list()uint64[]' | 'read_marketplace_list', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint[]
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      marketplaceList?: BinaryState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type NftMarketplaceListSig = keyof NftMarketplaceList['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends NftMarketplaceListSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the NftMarketplaceList smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends NftMarketplaceListSig> = NftMarketplaceList['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the NftMarketplaceList smart contract to the method's return type
 */
export type MethodReturn<TSignature extends NftMarketplaceListSig> = NftMarketplaceList['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type NftMarketplaceListCreateCalls = (typeof NftMarketplaceListCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type NftMarketplaceListCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type NftMarketplaceListDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: NftMarketplaceListCreateCalls) => NftMarketplaceListCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class NftMarketplaceListCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the NftMarketplaceList smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the add_marketplace_to_list(uint64)uint64[] ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static addMarketplaceToList(args: MethodArgs<'add_marketplace_to_list(uint64)uint64[]'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'add_marketplace_to_list(uint64)uint64[]' as const,
      methodArgs: Array.isArray(args) ? args : [args.appId],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the remove_marketplace_from_list(uint64)uint64[] ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static removeMarketplaceFromList(args: MethodArgs<'remove_marketplace_from_list(uint64)uint64[]'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'remove_marketplace_from_list(uint64)uint64[]' as const,
      methodArgs: Array.isArray(args) ? args : [args.appId],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the read_marketplace_list()uint64[] ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static readMarketplaceList(args: MethodArgs<'read_marketplace_list()uint64[]'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'read_marketplace_list()uint64[]' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the NftMarketplaceList smart contract
 */
export class NftMarketplaceListClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `NftMarketplaceListClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof NftMarketplaceList['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the NftMarketplaceList smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: NftMarketplaceListDeployArgs & AppClientDeployCoreParams & IncludeSchema = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(NftMarketplaceListCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the NftMarketplaceList smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      async bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & IncludeSchema & CoreAppCallArgs & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<undefined, AppCreateCallTransactionResult>(await $this.appClient.create(args))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the NftMarketplaceList smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the add_marketplace_to_list(uint64)uint64[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public addMarketplaceToList(args: MethodArgs<'add_marketplace_to_list(uint64)uint64[]'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftMarketplaceListCallFactory.addMarketplaceToList(args, params))
  }

  /**
   * Calls the remove_marketplace_from_list(uint64)uint64[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public removeMarketplaceFromList(args: MethodArgs<'remove_marketplace_from_list(uint64)uint64[]'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftMarketplaceListCallFactory.removeMarketplaceFromList(args, params))
  }

  /**
   * Calls the read_marketplace_list()uint64[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public readMarketplaceList(args: MethodArgs<'read_marketplace_list()uint64[]'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftMarketplaceListCallFactory.readMarketplaceList(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<NftMarketplaceList['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get marketplaceList() {
        return NftMarketplaceListClient.getBinaryState(state, 'marketplace_list')
      },
    }
  }

  public compose(): NftMarketplaceListComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      addMarketplaceToList(args: MethodArgs<'add_marketplace_to_list(uint64)uint64[]'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.addMarketplaceToList(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      removeMarketplaceFromList(args: MethodArgs<'remove_marketplace_from_list(uint64)uint64[]'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.removeMarketplaceFromList(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      readMarketplaceList(args: MethodArgs<'read_marketplace_list()uint64[]'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.readMarketplaceList(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as NftMarketplaceListComposer
  }
}
export type NftMarketplaceListComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the add_marketplace_to_list(uint64)uint64[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  addMarketplaceToList(args: MethodArgs<'add_marketplace_to_list(uint64)uint64[]'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): NftMarketplaceListComposer<[...TReturns, MethodReturn<'add_marketplace_to_list(uint64)uint64[]'>]>

  /**
   * Calls the remove_marketplace_from_list(uint64)uint64[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  removeMarketplaceFromList(args: MethodArgs<'remove_marketplace_from_list(uint64)uint64[]'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): NftMarketplaceListComposer<[...TReturns, MethodReturn<'remove_marketplace_from_list(uint64)uint64[]'>]>

  /**
   * Calls the read_marketplace_list()uint64[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  readMarketplaceList(args: MethodArgs<'read_marketplace_list()uint64[]'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): NftMarketplaceListComposer<[...TReturns, MethodReturn<'read_marketplace_list()uint64[]'>]>

  /**
   * Makes a clear_state call to an existing instance of the NftMarketplaceList smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): NftMarketplaceListComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): NftMarketplaceListComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<NftMarketplaceListComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<NftMarketplaceListComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type NftMarketplaceListComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type NftMarketplaceListComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
