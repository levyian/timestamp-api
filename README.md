# This repo is archived

# Timestamp Microservice
User stories:
* User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a Unix timestamp or a natural language date (example: January 1, 2016).
* User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
* User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

## Usage:
`https://levyian-timestamp-api.herokuapp.com/531531613`
`https://levyian-timestamp-api.herokuapp.com/January%207,%201970`

## Output:
`{"unix":531531613,"natural":"Wednesday, January 7, 1970"}`

## License
MIT License

Copyright (c) 2016 Levyian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
