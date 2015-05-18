# gulpIssues

I'm seeing some weird issues with source maps when using gulp, concat and uglify. 

1. Restore NPM using npm install
2. Run gulp (it will watch)
3. Run http-server to serve the file
4. Visit http://localhost:8080
5. Open up chrome developer tools, and navigate to 'source/scripts/myApp.someView.js'
6. Try to add a breakpoint to the line indicated in the comments. You won't be able to
7. Add a breakpoint where it will let you, and reload the page. You wil see the symbols have not been mapped.
8. Comment out the 'uglify' line in gulp, and rerun gulp. Then source mapping (using concat) works fine

![Image of Chrome Debugger](https://raw.githubusercontent.com/jamescrowley/gulpIssues/master/ChomeDebugger.PNG)

