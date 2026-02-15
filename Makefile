shell:
	docker run --rm -it -u $(shell id -u):$(shell id -g) -v $(PWD):/app -w /app node:24-slim bash
