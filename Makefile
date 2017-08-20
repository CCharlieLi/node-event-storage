DEBUG = DEBUG=es,es*
BIN = ./node_modules/.bin
TESTS = test/*.test.js
MOCHA_OPTS = -b --timeout 20000 --reporter spec

lint:
	@echo "Linting..."
	@$(BIN)/eslint lib index.js
test: lint
	@echo "Testing..."
	@NODE_ENV=test $(DEBUG) npm run test
test-cov: lint
	@echo "Testing..."
	@NODE_ENV=test $(DEBUG) $(BIN)/istanbul cover $(BIN)/_mocha -- $(MOCHA_OPTS) $(TESTS)
test-coveralls: test-cov
	@cat ./coverage/lcov.info | $(BIN)/coveralls --verbose
.PHONY: lint test test-cov test-coveralls
