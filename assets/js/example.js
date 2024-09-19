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

// Function to switch between editors
function openEditor(editorId) {
    var editors = document.querySelectorAll('.editor-area');
    editors.forEach(editor => editor.classList.remove('active'));
    document.getElementById(editorId).classList.add('active');

    var tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`button[onclick="openEditor('${editorId}')"]`).classList.add('active');

    if (editorId === 'htmlEditor') {
        htmlEditor.refresh();
    } else if (editorId === 'cssEditor') {
        cssEditor.refresh();
    } else if (editorId === 'jsEditor') {
        jsEditor.refresh();
    }
}

// Function to run the code
function runCode() {
    var htmlCode = htmlEditor.getValue();
    var cssCode = cssEditor.getValue();
    var jsCode = jsEditor.getValue();
    var output = document.getElementById('output');
    output.contentDocument.open();
    output.contentDocument.write(htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCode + "<\/script>");
    output.contentDocument.close();
}

// Function to save the code
function saveCode() {
    var exampleId = new URLSearchParams(window.location.search).get('exampleId');
    localStorage.setItem(`htmlCode_${exampleId}`, htmlEditor.getValue());
    localStorage.setItem(`cssCode_${exampleId}`, cssEditor.getValue());
    localStorage.setItem(`jsCode_${exampleId}`, jsEditor.getValue());
    alert('Code saved successfully!');
}

// Function to load the code
function loadCode() {
    var exampleId = new URLSearchParams(window.location.search).get('exampleId');
    var savedHtmlCode = localStorage.getItem(`htmlCode_${exampleId}`);
    var savedCssCode = localStorage.getItem(`cssCode_${exampleId}`);
    var savedJsCode = localStorage.getItem(`jsCode_${exampleId}`);

    if (savedHtmlCode) htmlEditor.setValue(savedHtmlCode);
    if (savedCssCode) cssEditor.setValue(savedCssCode);
    if (savedJsCode) jsEditor.setValue(savedJsCode);
}

// Auto-run code on input change
htmlEditor.on('change', runCode);
cssEditor.on('change', runCode);
jsEditor.on('change', runCode);

// Load the code when the page loads
window.onload = loadCode;