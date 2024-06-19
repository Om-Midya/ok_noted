# Note App

This is a simple note-taking application built with TypeScript, JavaScript, React, and Express. The application allows users to create, update, delete, and view notes.

## Features

- Create a new note
- Update an existing note
- Delete a note
- View all notes
- View a specific note

## Tech Stack

- TypeScript
- JavaScript
- React
- Express
- MongoDB

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/Om-Midya/note-app.git
```
2. Navigate to the project directory:

```bash
cd note-app
```
3. Install the dependencies:

```bash
npm install
```
4. Start the server:

```bash
npm run server
```
5. Start the client:

```bash
npm run client
```
6. Open your browser and navigate to `http://localhost:3000/` to view the application.
7. To stop the server, press `Ctrl + C`.


## Usage
The application exposes the following endpoints:

- `GET /`: Get all notes
- `GET /:id`: Get a specific note
- `POST /`: Create a new note
- `PUT /:id`: Update a note
- `DELETE /:id`: Delete a note

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
