export const STYLE_TEMPLATE = `
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.container > * {
    margin: 10px;
}
.container > *:not(:last-child) {
    border-bottom: 1px solid #ccc;
}
.container > *:not(:first-child) {
    border-top: 1px solid #ccc;
}
.container > *:not(:first-child):not(:last-child) {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.text {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
export const TEXT_TEMPLATE = '⬇ See the console for the output 😋 ⬇';

