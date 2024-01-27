export const onRequestGet = async ({ request}) => 
{

    const clientUA = request.headers.get('User-Agent');
    const clientIP = request.headers.get('CF-Connecting-IP');
    const clientASN = request.cf.asn;
    const clientISP = request.cf.asOrganization;
    const cloudflareColo = request.cf.colo;
    const httpProtocol = request.cf.httpProtocol;
    const clientCO = request.cf.country;
    const clientCI = request.cf.city;
    const clientRE = request.cf.region;
    const clientLAT = request.cf.latitude;
    const clientLON = request.cf.longitude;
    const clientPC = request.cf.postalCode;
    const clientTZ = request.cf.timezone;

    return new Response("Public IP: " + clientIP + "\n" +
        "ASN: " + clientASN + "\n" +
        "ISP: " + clientISP + "\n" +
        "Cloudflare Data Center: " + cloudflareColo + "\n" +
        "HTTP Protocol: " + httpProtocol + "\n" +
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

}
