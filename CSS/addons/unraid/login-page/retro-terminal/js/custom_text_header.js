
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre> _____              _
|  __ \\            | |
| |  | | __ _ _ __ | |     ___  ___
| |  | |/ _` | '_ \\| |    / _ \\/ _ \\
| |__| | (_| | | | | |___|  __/  __/
|_____/ \\__,_|_| |_|______\\___|\\___|
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
