// import { isVoidExpression } from 'typescript';

// export default class Semaphore {
//   currentRequests: [];
//   runningRequests: number;
//   maxConcurrentRequests: number;
//   /**
//    * Creates a semaphore that limits the number of concurrent Promises being handled
//   // * @param {*} maxConcurrentRequests max number of concurrent promises being handled at any time
//    */
//   constructor(
//     maxConcurrentRequests: number,
//     runningRequests: number,
//     currentRequests: {
//       resolve: any;
//       reject: any;
//       fnToCall: any;
//       args: any;
//     }[] = []
//   ) {
//     this.currentRequests = [];
//     this.runningRequests = 0;
//     this.maxConcurrentRequests = maxConcurrentRequests;
//   }

//   /**
//    * Returns a Promise that will eventually return the result of the function passed in
//    * Use this to limit the number of concurrent function executions
//    * @param {*} fnToCall function that has a cap on the number of concurrent executions
//    * @param  {...any} args any arguments to be passed to fnToCall
//    * @returns Promise that will resolve with the resolved value as if the function passed in was directly called
//    */
//   callFunction(fnToCall: any, ...args: any) {
//     return new Promise<any>((resolve, reject) => {
//       const data: {
//         resolve: any;
//         reject: any;
//         fnToCall: any;
//         args: any;
//       }[] = [];
//       this.currentRequests.push(data);
//       this.tryNext();
//     });
//   }

//   tryNext(): any {
//     if (!this.currentRequests.length) {
//       return;
//     } else if (this.runningRequests < this.maxConcurrentRequests) {
//       const { resolve, reject, fnToCall, args } = this.currentRequests.shift();
//       this.runningRequests++;
//       let req = fnToCall(...args);
//       req
//         .then((res: any) => resolve(res))

//         .catch((err: any) => reject(err))
//         .finally(() => {
//           this.runningRequests--;
//           this.tryNext();
//         });
//     }
//   }
// }

// /* HOW TO USE */
// // const throttler = new Semaphore(2);
// // throttler.callFunction(fetch, 'https://render.com');
// // throttler.callFunction(fetch, 'https://flutterwave.com/ng/');
// // throttler.callFunction(fetch, 'https://www.google.com.ng/');
// // throttler.callFunction(fetch, 'www.google.com');
