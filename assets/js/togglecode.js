function toggleCode(codeId) {
    const codeExample = document.getElementById(codeId);
    if (codeExample.classList.contains('collapsed')) {
        codeExample.classList.remove('collapsed');
        codeExample.classList.add('expanded');
        document.querySelector(`button[onclick="toggleCode('${codeId}')"]`).textContent = 'Collapse';
    } else {
        codeExample.classList.remove('expanded');
        codeExample.classList.add('collapsed');
        document.querySelector(`button[onclick="toggleCode('${codeId}')"]`).textContent = 'Expand';
    }
}

// function editCode(exampleId) {
//     window.location.href = `example/homeex.html?exampleId=${exampleId}`;
// }
function editCode(examplePage, exampleId) {
    window.location.href = `example/homeex.html?examplePage=${examplePage}&exampleId=${exampleId}`;
}
