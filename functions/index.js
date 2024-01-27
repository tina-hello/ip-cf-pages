


js-beautify
(v1.14.11)
Beautify JavaScript, JSON, React.js, HTML, CSS, SCSS, and SASS

Enable Dark Mode

Beautify JavaScript
Beautify Code (ctrl‑enter)

Copy to Clipboard
 
Select All
 
Clear
 No file chosen
Options

Indent with 4 spaces

Allow 5 newlines between tokens

Do not wrap lines

Braces with control statement
HTML <style>, <script> formatting:


Add one indent level
  End script and style with newline?
Support e4x/jsx syntax
Use comma-first list style?
Detect packers and obfuscators? (unsafe)
Preserve inline braces/code blocks?
Keep array indentation?
Break lines on chained methods?
Space before conditional: "if(x)" / "if (x)"
Unescape printable chars encoded as \xNN or \uNNNN?
Use JSLint-happy formatting tweaks?
Indent <head> and <body> sections?
Keep indentation on empty lines?
Use a simple textarea for code input?
Additional Settings (JSON):

{}
Your Selected Options (JSON):

{
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "5",
  "preserve_newlines": true,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": true,
  "unescape_strings": false,
  "jslint_happy": false,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}
Created by Einar Lielmanis, maintained and evolved by Liam Newman.

All of the source code is completely free and open, available on GitHub under MIT licence, and we have a command-line version, python library and a node package as well.

We use the wonderful CodeMirror syntax highlighting editor, written by Marijn Haverbeke.

Made with a great help of many contributors. Special thanks to:
Jason Diamond, Patrick Hof, Nochum Sossonko, Andreas Schneider, Dave Vasilevsky, Vital Batmanov, Ron Baldwin, Gabriel Harrison, Chris J. Shull, Mathias Bynens, Vittorio Gambaletta, Stefano Sanfilippo and Daniel Stockman.

export const onRequestGet = async ({
    request
}) => {

    const clientUA = request.headers.get('User-Agent');
    const clientIP = request.headers.get('CF-Connecting-IP');
    const clientASN = request.cf.asn;
    const clientISP = request.cf.asOrganization;
    const cloudflareColo = request.cf.colo;
    const httpProtocol = request.cf.httpProtocol;
    const tlsCipher = request.cf.tlsCipher;
    const tlsVersion = request.cf.tlsVersion;
    const clientCO = request.cf.country;
    const clientCI = request.cf.city;
    const clientRE = request.cf.region;
    const clientLAT = request.cf.latitude;
    const clientLON = request.cf.longitude;
    const clientPC = request.cf.postalCode;
    const clientTZ = request.cf.timezone;
    if (clientUA.contains("Mozilla")) {
        return new Response("Public IP: " + clientIP + "\n" +
            "ASN: " + clientASN + "\n" +
            "ISP: " + clientISP + "\n" +
            "Cloudflare Data Center: " + cloudflareColo + "\n" +
            "HTTP Protocol: " + httpProtocol + "\n" +
            "TLS Cipher " + tlsCipher + "\n" +
            "TLS Version " + tlsVersion + "\n" +
            "Country: " + clientCO + "\n" +
            "City: " + clientCI + "\n" +
            "Region: " + clientRE + "\n" +
            "Latitude, Longitude: " + clientLAT + "," + clientLON + "\n" +
            "Postal Code: " + clientPC + "\n" +
            "Timezone: " + clientTZ + "\n" +
            "User Agent: " + clientUA + "\n", {
                status: 200
            }

        );
    } else {
        return new Response(
            "\"ip\": \"" + clientIP + "\"\n" +
            "\"asn\": \"" + clientASN + "\"\n" +
            "\"isp\": \"" + clientISP + "\"\n" +
            "\"cf-dc\": \"" + cloudflareColo + "\"\n" +
            "\"protocol\": \"" + httpProtocol + "\"\n" +
            "\"cipher: \"" + tlsCipher + "\"\n" +
            "\"tls-version" + tlsVersion + "\n" +
            "\"country\": \"" + clientCO + "\"\n" +
            "\"city\": \"" + clientCI + "\"\n" +
            "\"region\": \"" + clientRE + "\"\n" +
            "\"loc\": \"" + clientLAT + "," + clientLON + "\"\n" +
            "\"postal\": \"" + clientPC + "\"\n" +
            "\"timezone\": \"" + clientTZ + "\"\n" +
            "\"user-agent\": \"" + clientUA + "\"\n"



            , {
                status: 200
            }
        );
    }

}
