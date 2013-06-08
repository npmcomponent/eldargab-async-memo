test: node_modules
	@node_modules/.bin/mocha -R spec

node_modules:
	@npm install -d

clean:
	@rm -rf node_modules

.PHONY: test clean
