// Initialize CodeMirror editors
var htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlCode'), {
    mode: 'htmlmixed',
    theme: 'monokai',
    lineNumbers: true,
    autoCloseTags: true
});

var cssEditor = CodeMirror.fromTextArea(document.getElementById('cssCode'), {
    mode: 'css',
    theme: 'monokai',
    lineNumbers: true,
    autoCloseBrackets: true
});

var jsEditor = CodeMirror.fromTextArea(document.getElementById('jsCode'), {
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true,
    autoCloseBrackets: true
});

// Function to run the code
function runCode() {
    var htmlCode = htmlEditor.getValue();
    var cssCode = "<style>" + cssEditor.getValue() + "</style>";
    var jsCode = "<script>" + jsEditor.getValue() + "<\/script>";
    var output = document.getElementById('output');

    // Output the result in the iframe
    output.contentDocument.open();
    output.contentDocument.write(htmlCode + cssCode + jsCode);
    output.contentDocument.close();
}

// Add change event to editors for real-time preview
htmlEditor.on('change', runCode);
cssEditor.on('change', runCode);
jsEditor.on('change', runCode);

// Function to save the code
function saveCode() {
    localStorage.setItem('htmlCode', htmlEditor.getValue());
    localStorage.setItem('cssCode', cssEditor.getValue());
    localStorage.setItem('jsCode', jsEditor.getValue());
    alert('Code saved successfully!');
}

// Load saved code on page load
function loadCode() {
    var savedHtmlCode = localStorage.getItem('htmlCode');
    var savedCssCode = localStorage.getItem('cssCode');
    var savedJsCode = localStorage.getItem('jsCode');

    if (savedHtmlCode) {
        htmlEditor.setValue(savedHtmlCode);
    }
    if (savedCssCode) {
        cssEditor.setValue(savedCssCode);
    }
    if (savedJsCode) {
        jsEditor.setValue(savedJsCode);
    }
}

// Load code when page loads
window.onload = loadCode;
