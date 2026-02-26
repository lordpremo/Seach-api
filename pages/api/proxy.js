
export default async function handler(req, res) {
  const { id } = req.query;

  const streams = {
    hsn1: "https://qvc-amd-live.akamaized.net/hls/live/2034113/lshsn1us/master.m3u8",
    qvc1: "https://qvc-amd-live.akamaized.net/hls/live/2034113/lsqvc1us/master.m3u8",
    gemshopping: "https://amg01460-gemshoppingnetw-gem-ono-x662c.amagi.tv/playlist.m3u8",
    tubiaction: "https://aegis-cloudfront-1.tubi.video/34cd3ae2-bb20-4594-af20-01f241a525ba/playlist.m3u8",
    publica: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50",
    tubimovies2: "https://aegis-cloudfront-1.tubi.video/55607a73-d5bd-4a09-979e-5933354469ee/playlist.m3u8",
    vevopopau: "https://d128y56w6v2kax.cloudfront.net/playlist/amg00056-vevotv-vevopopau-samsungau/playlist.m3u8",
    countrytv: "https://a-cdn.klowdtv.com/live2/countrytv_720p/playlist.m3u8",
    vevo2au: "https://d1s6jz7jeei17.cloudfront.net/playlist/amg00056-vevotv-vevo2kau-samsungau/playlist.m3u8",
    scheduler145: "https://d1j2u714xk898n.cloudfront.net/scheduler/scheduleMaster/145.m3u8",
    powernation: "https://amg01258-raycomsports-powernationau-samsungau-18bwc.amagi.tv/playlist.m3u8",
    kartoon: "https://amg01076-lightningintern-kartoonchannel-samsungnz-t8blu.amagi.tv/playlist/amg01076-lightningintern-kartoonchannel-samsungnz/playlist.m3u8",
    toongoggles: "https://amg01329-otterainc-toongoggles-samsungau-ad-4c.amagi.tv/playlist/amg01329-otterainc-toongoggles-samsungau/playlist.m3u8",
    babyshark: "https://c0c65b821b3542c3a4dca92702f59944.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_BabySharkTV/playlist.m3u8",
    disney: "https://fl31.moveonjoy.com:443/DISNEY/index.m3u8",
    nickelodeon: "https://fl31.moveonjoy.com:443/NICKELODEON/index.m3u8",
    ryanfriends: "https://amg00286-pocketwatch-ryanandfriends-samsungnz-oc0ua.amagi.tv/playlist/amg00286-pocketwatch-ryanandfriends-samsungnz/playlist.m3u8",
    supersimple: "https://janson-supersimplesongs-1-us.roku.wurl.tv/playlist.m3u8",
    comet: "https://fast-channels.sinclairstoryline.com/COMET/index.m3u8",
    tintv: "https://tulixcdn.akamaized.net/tintv6/tintv/tintv/playlist.m3u8",
    tubidrama: "https://aegis-cloudfront-1.tubi.video/d4038326-a3e3-4aba-b1f1-f0526c912c74/playlist.m3u8",
    stirr10: "https://linear-10.frequency.stream/dist/stirr/10/hls/master/playlist.m3u8",
    bloombergeu: "https://www.bloomberg.com/media-manifest/streams/eu.m3u8",
    rakutenawesome: "https://3ab76e42.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X1Blb3BsZUFyZUF3ZXNvbWVfSExT/playlist.m3u8",
    petcollective: "https://the-pet-collective-international-no.samsung.wurl.tv/playlist.m3u8",
    gousa: "https://brandusa-gousa-1-be.samsung.wurl.tv/playlist.m3u8",
    wpt: "https://amg00218-wptenterprisesi-worldpokertour-xumo-us.amagi.tv/playlist.m3u8",
    failarmy: "https://bd93cfed.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZhaWxBcm15X0hMUw/playlist.m3u8",
    jflgags: "https://distributionsjustepourrire-justforlaughsgags-1-be.samsung.wurl.tv/playlist.m3u8",
    homeshammer: "https://all3media-homes-under-the-hammer-1-au.samsung.wurl.tv/playlist.m3u8",
    baywatch: "https://amg00145-fremantlemedian-baywatch-samsungau-gtsd6.amagi.tv/playlist/amg00145-fremantlemedian-baywatch-samsungau/playlist.m3u8",
    rakutengermany: "https://rakutenaa-tm-germany-rakuten-ger-8jboz.amagi.tv/playlist/rakutenAA-tm-germany-rakuten-ger/playlist.m3u8",
    yahoofinance: "https://yahoo-samsung.amagi.tv/playlist.m3u8",
    dealnodeal: "https://amg00627-banijaygroup-dealornodeal-samsungau-si7xg.amagi.tv/playlist/amg00627-banijaygroup-dealornodeal-samsungau/playlist.m3u8",
    haunttv: "https://amg01446-blueantmediacan-haunttvaussam-samsungau-vcnai.amagi.tv/playlist/amg01446-blueantmediacan-haunttvaussam-samsungau/playlist.m3u8",
    estrellatv: "https://estrellatv-xumo.amagi.tv/playlist.m3u8",
    yugioh: "https://amg01796-amg01796c19-rakuten-gb-7486.playouts.now.amagi.tv/playlist/amg01796-fastmediafast-yugioh2en-rakutengb/playlist.m3u8",
    midsomer: "https://all3media-midsomer-1-us.roku.wurl.tv/playlist.m3u8",
    ntduk: "https://ntd02.akamaized.net/NTD-UK/index.m3u8",
    sportsgrid: "https://sportsgrid-tribal.amagi.tv/playlist.m3u8",
    tennisintl: "https://amg01444-tennischannelth-tennischnlintl-lggb-mr3r5.amagi.tv/playlist/amg01444-tennischannelth-tennischnlintl-lggb/playlist.m3u8",
    dwnews: "https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/master.m3u8",
    france24: "https://static.france24.com/live/F24ENHIHLS/liveweb.m3u8",
    redbull: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
    nasa: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1/master.m3u8",
    pbskids: "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8",
    clubbingtv: "https://clubbingtv-samsunguk.amagi.tv/playlist.m3u8"
  };

  const url = streams[id];
  if (!url) return res.status(404).send("Stream not found");

  try {
    const upstream = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0", "Accept": "*/*" }
    });

    if (!upstream.ok) return res.status(502).send("Upstream error");

    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/vnd.apple.mpegurl");
    res.setHeader("Access-Control-Allow-Origin", "*");

    upstream.body.pipe(res);
  } catch (e) {
    res.status(500).send("Proxy error");
  }
}
