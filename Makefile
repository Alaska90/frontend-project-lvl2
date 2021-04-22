install: 
		npm install
start:
	    bin/gendiff.js __fixtures__/before.yml __fixtures__/after.yml
publish: 
		npm publish --dry-run
build:
		npm run build
lint:
		npx eslint .
test:
		npm test
test-coverage:
		npm test -- --coverage
.PHONY: test
