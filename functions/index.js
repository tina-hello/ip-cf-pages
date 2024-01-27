export const onRequestGet = async ({
  request,
}) => {
  const clientUA = request.headers.get('User-Agent');
  const clientIP = request.headers.get('CF-Connecting-IP');
  const clientASN = request.cf.asn;
  const clientISP = request.cf.asOrganization;
  const cloudflareColo = request.cf.colo;
  const { httpProtocol } = request.cf;
  const { tlsCipher } = request.cf;
  const { tlsVersion } = request.cf;
  const clientCO = request.cf.country;
  const clientCI = request.cf.city;
  const clientRE = request.cf.region;
  const clientLAT = request.cf.latitude;
  const clientLON = request.cf.longitude;
  const clientPC = request.cf.postalCode;
  const clientTZ = request.cf.timezone;
  if (clientUA.contains('Mozilla')) {
    return new Response('Public IP: ${clientIP}\n'
            + 'ASN: ${clientASN}\n'
            + 'ISP: ${clientISP}\n'
            + 'Cloudflare Data Center: ${cloudflareColo}\n'
            + 'HTTP Protocol: ${httpProtocol}\n'
            + 'TLS Cipher ${tlsCipher}\n'
            + 'TLS Version ${tlsVersion}\n'
            + 'Country: ${clientCO}\n'
            + 'City: ${clientCI}\n'
            + 'Region: ${clientRE}\n'
            + 'Latitude, Longitude: ${clientLAT},${clientLON}\n'
            + 'Postal Code: ${clientPC}\n'
            + 'Timezone: ${clientTZ}\n'
            + 'User Agent: ${clientUA}\n', {
      status: 200,
    });
  }
  return new Response(
    '"ip": "${clientIP}"\n'
            + '"asn": "${clientASN}"\n'
            + '"isp": "${clientISP}"\n'
            + '"cf-dc": "${cloudflareColo}"\n'
            + '"protocol": "${httpProtocol}"\n'
            + '"cipher: "${tlsCipher}"\n'
            + '"tls-version${tlsVersion}\n'
            + '"country": "${clientCO}"\n'
            + '"city": "${clientCI}"\n'
            + '"region": "${clientRE}"\n'
            + '"loc": "${clientLAT},${clientLON}"\n'
            + '"postal": "${clientPC}"\n'
            + '"timezone": "${clientTZ}"\n'
            + '"user-agent": "${clientUA}"\n',

    {
      status: 200,
    },
  );
};
