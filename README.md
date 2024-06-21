# Simple Docu
A tool to write beautiful markdown with code snippet capability

## Get Started
If you are new to Markdown Syntax use this as a guide: [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)

Clone the repository or fork
`git clone <url>`

Install packages and dependecies
`npm i && npm run dev`

## How to Use
### Create Docs  

1. Enter a Title for your new note  

2. Write markdown into the Note box where it says "Add a Note"  

3. Select a coding language  

4. Enter line numbers you'd like to highlight in the following format:  
To highlight a single line enter a line number followed by a `:` then the same number again. When highlighting multiple lines they need to be separated by a `,`  
```plain
1:1 // -> highlights the first line only

1:1, 3:5 // -> highlights the first line, and third through fifth line.
```

### Code Snippets
You can copy your code snippets by clicking the `copy` button below each one

### Docs
Documents are called Notes.  
Top section will be your code snippets  
Below that section will be your markdown notes.  
> [!NOTE] 
> The Title when creating your notes will not show up on this page. If you want your Notes to have a title please add it using markdown for example:
> ```
> # This is my Title
> ```
>>

## Additional Information
User authentication is not implemented yet due to time constraints. Will implement in the next coming weeks. \- 06/20/2024

## What New Features to Expect
Currently styling is done primarily with CSS stylesheets. I'm planning to replace these with TailwindCSS.

When writing a code snippet in the `Create Docs` page it doesn't incorporate tabbing and autocomplete for coding syntax. This will be added soon.

Automated code analysis to generate basic documentation that can then be adjusted as needed. This documentation should be able to generate docs explaining core functionalities such as:
- functions
- parameters
- React components  

## Built with <img align="center" src="./src/assets/images/heart.svg" alt="heart icon with a bolt inside" width="32px" />
React w/ Vite  
NodeJS w/ Express  
[documentsAPI](https://github.com/wrfmartinez/documents-api) created specifically for Simple Docu  
MongoDB Database Storage  
[Remarkable](https://github.com/jonschlinkert/remarkable) for Markdown Rendering  
[React Code Block](https://react-code-block.netlify.app/) for Code Snippets

#### Attribution
<a href="https://iconscout.com/icons/heart" class="text-underline font-size-sm" target="_blank">Heart</a> by <a href="https://iconscout.com/contributors/chamedesign" class="text-underline font-size-sm">Chamestudio</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>