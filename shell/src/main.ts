// import { loadRemoteEntry } from '@angular-architects/module-federation';


// // Promise.all([
// 	loadRemoteEntry('http://localhost:5000/remoteEntry.js', 'mfeLogin')
// 	.catch(err => console.error('Error loading remote entries', err))
// 	.then(() => import('./bootstrap'))
// 	.catch(err => console.error(err));
// // ])
// // 	.catch(err => console.error('Error loading remote entries', err))
// // import('./bootstrap')
// // 	.catch(err => console.error(err));
import('./bootstrap')
  .catch(err => console.error(err));

// import { loadRemoteEntry } from '@angular-architects/module-federation';

// Promise.all([
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:5000/remoteEntry.js',
//   }),
// ])
//   .catch((err) => console.error('Error loading remote entries', err))
//   .then(() => import('./bootstrap'))
//   .catch((err) => console.error(err));