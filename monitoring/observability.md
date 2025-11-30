# Monitoring & Risk Dashboard Spec

## Data Sources
- **GA4 API** → hourly export of `pagePath`, `screenPageViews`, `engagedSessions`.
- **GSC Search Analytics** → daily crawl for `query`, `position`, `clicks`.
- **Cloudflare Logs** → `botScore`, `cacheStatus`, `edgeResponseBytes`, shipped to BigQuery.
- **Backlink velocity** → Ahrefs/SerpAPI `refdomains` endpoint polled daily.

## BigQuery Schemas
```sql
CREATE TABLE IF NOT EXISTS ewhoring.logs (
  ts TIMESTAMP,
  host STRING,
  uri STRING,
  cfCacheStatus STRING,
  botScore INT64,
  status INT64,
  country STRING,
  userAgent STRING
);
```

```sql
CREATE TABLE IF NOT EXISTS ewhoring.serp_monitor (
  run_date DATE,
  keyword STRING,
  device STRING,
  rank INT64,
  url STRING
);
```

## KPI Tiles
- **Indexation health**: % of URLs in sitemap receiving ≥1 impression (GSC vs sitemap).
- **CWV regression**: LCP/Paint metrics from GA4 vs threshold (<1.3s desktop, <1.8s mobile).
- **Backlink velocity**: 7-day rolling new referring domains vs baseline.
- **Manual action risk**: Cloudflare `botScore < 10` share + spike detection.
- **Parasite cannibalization**: Compare parasite SERP rank vs money URL, trigger warning if parasite outranks root for >48h.

## Alerts
| Metric | Condition | Channel |
| --- | --- | --- |
| Crawl errors | `5xx` share > 5% for 15 min | Telegram ops room |
| Rank drop | Keyword rank drop ≥5 positions day/day | Slack #seo |
| Backlink surge | Ref domains +40% week/week | Email + Notion task |
| De-index | Index coverage drops below 95% of sitemap URLs | PagerDuty low-priority |

## Dashboard Stack
- **Looker Studio** for exec overview (GA4 + GSC blend).
- **Metabase** for deep dives hooking directly into BigQuery tables above.
- **Grafana Cloud** for real-time log-derived alerts (ingests via Loki).


