install: 
		npm install
start:
	    npx babel-node bin/gendiff.js testFiles/file1.json testFiles/file2.json
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
