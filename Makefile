build:
	docker build -t gcr-blue-green .

run:
	docker run -p 3000:3000 gcr-blue-green