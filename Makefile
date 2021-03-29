install: 
		npm install
start:
	    bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
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
