*This repository is a mirror of the [component](http://component.io) module [eldargab/async-memo](http://github.com/eldargab/async-memo). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/eldargab-async-memo`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
#async-memo

Call a function at most once and remember the result. Args are not supported.

##Example

```javascript
var memo = require('async-memo')
var doc = memo(function(cb) {
  // fetch remote document
  // you want this to be done only once
  fetch(cb)
})
doc(function(err, val) {
  // use fetched document here
})
// You can safely call doc() from everywhere at any time.
// fetch() will be called only once.
```

##Installation

via component

```
component install eldargab/async-memo
```

via npm

```
npm install async-memo
```

##License

MIT
