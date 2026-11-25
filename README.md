[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/KroFR/ha-server-health-card)](https://github.com/KroFR/ha-server-health-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home_Assistant-2024.11+-blue)](https://www.home-assistant.io/)
[![HACS Validation](https://github.com/KroFR/ha-server-health-card/actions/workflows/hacs.yaml/badge.svg)](https://github.com/KroFR/ha-server-health-card/actions/workflows/hacs.yaml)
[![License](https://img.shields.io/github/license/KroFR/ha-server-health-card)](https://github.com/KroFR/ha-server-health-card/blob/main/LICENSE)

# ❤️‍🩹 HA Server Health Card

A custom Lovelace card for [Home Assistant](https://www.home-assistant.io/) that brings server health, system resources, Home Assistant information, network activity, storage, updates, and backups into a single compact dashboard card.

HA Server Health Card automatically discovers supported entities, displays 24-hour trends, and calculates a global health status from configurable Warning and Critical thresholds.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="502" height="704" alt="image" src="https://github.com/user-attachments/assets/02c796b3-b1cf-46f2-a905-f3cf9a51a568" /> | <img width="505" height="707" alt="image" src="https://github.com/user-attachments/assets/26639317-bb0d-4087-82d2-6b4cdc881c25" /> |

## ✨ Features

- Global server health status with configurable visibility and Warning and Critical thresholds
- Monitor Home Assistant, CPU, memory, disk, database, network, and storage
- Track categorized updates and backup status
- 24-hour mini graphs with database and backup size variation alerts
- Automatic discovery of supported Home Assistant entities
- Collapsible and reorderable sections with user-specific preferences
- Visual editor, English and French localization, and responsive light/dark themes

## ℹ️ Prerequisites

- Home Assistant 2025.1 or newer recommended
- [System Monitor](https://www.home-assistant.io/integrations/systemmonitor/) is recommended for CPU, memory, disk, uptime, IP address, network, and storage metrics
- Backup entities are required for backup information
- Update entities are required for update information

If System Monitor is unavailable or a sensor is disabled, the affected tile displays **Not available** or **Non disponible**.

## 📦 Installation

#### Marketplace (HA 2026.11 and newer)
 
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=KroFR&repository=ha-server-health-card)

or

- Open the Marketplace
- Search for **HA Server Health Card**
- Select the card and install it
- The Marketplace installs the plugin and adds it as a dashboard resource

#### HACS (HA before 2026.11)

- Install HACS if it is not already installed
- Open HACS in Home Assistant
- Search for **HA Server Health Card**
- Select the card and download it
- Reload the browser after installation

#### Manual

- Download `ha-server-health-card.js` from the `dist` folder of this repository
- Copy it to `/config/www/ha-server-health-card.js`
- Open **Settings > Dashboards > Resources**
- Add `/local/ha-server-health-card.js` as a **JavaScript module**
- Refresh the browser

## 🚀 Getting started

- Edit a dashboard and select **Add card**
- Search for **HA Server Health Card**
- Add the card
- Open the visual editor to select sections, reorder them, and configure Health thresholds

A minimal configuration is enough:

```yaml
type: custom:ha-server-health-card
```

The card automatically discovers supported Home Assistant entities.

### ⚙️ Configuration

The visual editor covers the main settings. Every option below can also be configured directly in YAML.

#### General options

| Option | Type | Default | Description |
|---|---|---|---|
| `type` | string | Required | Must be `custom:ha-server-health-card`. |
| `title` | string | Localized title | Overrides the card title. An empty value uses the translated default. |
| `subtitle` | string | Localized subtitle | Overrides the card subtitle. An empty value uses the translated default. |
| `language` | string | `auto` | Translation language: `auto`, `en`, or `fr`. `auto` follows the Home Assistant user preference. |
| `show_icon` | boolean | `true` | Shows the Home Assistant icon in the card header. |
| `show_header` | boolean | `true` | Shows the card title and subtitle. |
| `section_order` | list | See below | Controls the order of the six card sections. Unknown or missing section IDs are normalized automatically. |

Default section order:

```yaml
section_order:
  - home-assistant
  - system
  - network
  - storage
  - updates
  - backups
```

#### Section visibility

| Option | Type | Default | Description |
|---|---|---|---|
| `show_home_assistant` | boolean | `true` | Shows Home Assistant versions, components, and entity statistics. |
| `show_system` | boolean | `true` | Shows CPU, memory, disk, database, IPv4, and uptime. |
| `show_network` | boolean | `true` | Shows detected network interfaces and throughput. |
| `show_storage` | boolean | `true` | Shows detected storage volumes and usage. |
| `show_updates` | boolean | `true` | Shows available update entities. |
| `show_backups` | boolean | `true` | Shows backup status, size, dates, and schedule. |

Sections can be reordered in the visual editor. When no user preference exists, all sections start collapsed.

#### Health analysis

All numeric Health options accept zero or positive values. Percentage thresholds are constrained to `0–100`; database and backup sizes are expressed in decimal megabytes (`MB`).

| Option | Type | Default | Unit | Description |
|---|---|---:|---|---|
| `health_analysis_enabled` | boolean | `true` | — | Enables the global Health status, issue list, threshold coloring, and Health checks. |
| `health_status_display` | string | `always` | — | Controls Health status visibility: `always`, `problems` (only when at least one issue is detected), or `never`. Health analysis remains active unless `health_analysis_enabled` is disabled. |
| `health_cpu_warning` | number | `90` | `%` | CPU Warning threshold. |
| `health_cpu_critical` | number | `98` | `%` | CPU Critical threshold. |
| `health_memory_warning` | number | `90` | `%` | Memory Warning threshold. |
| `health_memory_critical` | number | `98` | `%` | Memory Critical threshold. |
| `health_disk_warning` | number | `85` | `%` | Disk and storage-volume Warning threshold. |
| `health_disk_critical` | number | `95` | `%` | Disk and storage-volume Critical threshold. |
| `health_database_warning` | number | `1500` | `MB` | Database-size Warning threshold. |
| `health_database_critical` | number | `3000` | `MB` | Database-size Critical threshold. |
| `health_backup_size_warning` | number | `1500` | `MB` | Latest-backup-size Warning threshold. |
| `health_backup_size_critical` | number | `3000` | `MB` | Latest-backup-size Critical threshold. |
| `health_database_variation_warning` | number | `25` | `%` | Warning threshold for the absolute database-size change over the last 24 hours. |
| `health_database_variation_critical` | number | `50` | `%` | Critical threshold for the absolute database-size change over the last 24 hours. |
| `health_backup_variation_warning` | number | `25` | `%` | Warning threshold for the absolute size change from the previous successful backup. |
| `health_backup_variation_critical` | number | `50` | `%` | Critical threshold for the absolute size change from the previous successful backup. |
| `health_unavailable_warning` | number | `5` | `%` | Warning threshold for unavailable entities divided by total entities. |
| `health_unavailable_critical` | number | `15` | `%` | Critical threshold for unavailable entities divided by total entities. |
| `health_updates_warning` | number | `10` | updates | Available-update Warning threshold. |
| `health_updates_critical` | number | `20` | updates | Available-update Critical threshold. |
| `health_check_core_update` | boolean | `true` | — | Adds a Warning issue when a Home Assistant Core update is available. |
| `health_check_os_update` | boolean | `true` | — | Adds a Warning issue when a Home Assistant OS update is available. |
| `health_check_backup` | boolean | `true` | — | Adds a Warning issue when the latest backup status indicates a failure. |

Warning is reached when the measured value is greater than or equal to the Warning threshold. Critical takes priority when the Critical threshold is reached.

Database variation compares the current database size with its earliest available value in the last 24 hours. Backup variation compares the latest successful backup size with the previous distinct value found in up to 30 days of history. Both checks use the absolute percentage change, so a `+30%` increase and a `-30%` decrease trigger the same Warning threshold. Variation checks are evaluated only when enough Recorder history is available.

#### Entity overrides

Entity discovery is enabled by default. Use the following options only when automatic discovery selects the wrong entity or when a custom sensor should be used.

| Option | Type | Default | Expected entity |
|---|---|---|---|
| `cpu_entity` | entity ID | Auto-detected | CPU usage sensor, normally `%`. |
| `memory_entity` | entity ID | Auto-detected | Memory usage sensor, normally `%`. |
| `disk_entity` | entity ID | Auto-detected | Primary disk usage sensor, normally `%`. |
| `database_entity` | entity ID | Auto-detected | Home Assistant database-size sensor with a data-size unit. |
| `uptime_entity` | entity ID | Auto-detected | Uptime or last-boot sensor. |
| `ipv4_entity` | entity ID | Auto-detected | IPv4 address sensor. |
| `network_in_entity` | entity ID | Auto-detected | Incoming network-throughput sensor. |
| `network_out_entity` | entity ID | Auto-detected | Outgoing network-throughput sensor. |
| `ha_core_update_entity` | entity ID | Auto-detected | Home Assistant Core update entity. |
| `supervisor_update_entity` | entity ID | Auto-detected | Home Assistant Supervisor update entity. |
| `ha_os_update_entity` | entity ID | Auto-detected | Home Assistant OS update entity. |
| `backup_status_entity` | entity ID | Auto-detected | Backup Manager status entity. |
| `last_backup_entity` | entity ID | Auto-detected | Latest successful automatic-backup date entity. |
| `last_backup_size_entity` | entity ID | Auto-detected | Latest successful automatic-backup size entity. |
| `next_backup_entity` | entity ID | Auto-detected | Next scheduled automatic-backup date entity. |

Entity overrides are supported in YAML even though they are not currently exposed in the visual editor.

## ❤️ Health analysis

The global Health bar summarizes the current server state:

- **Healthy**: no configured threshold or check is triggered
- **Warning**: at least one Warning threshold is reached
- **Critical**: at least one Critical threshold is reached

Select the Health bar to display the detected issues. Its open or closed state is saved per Home Assistant user. Use `health_status_display` to show the bar always, only when an issue is detected, or never. Hiding the bar does not disable Health analysis, threshold coloring, or configured checks.

#### Default thresholds

| Metric | Warning | Critical |
|---|---:|---:|
| CPU | 90% | 98% |
| Memory | 90% | 98% |
| Disk | 85% | 95% |
| Database size | 1500 MB | 3000 MB |
| Backup size | 1500 MB | 3000 MB |
| Database size variation (24 h) | ±25% | ±50% |
| Backup size variation | ±25% | ±50% |
| Unavailable entities | 5% | 15% |
| Available updates | 10 | 20 |

Additional checks are enabled by default for:

- Home Assistant Core updates
- Home Assistant OS updates
- Failed backups

## 🏠 Home Assistant

The Home Assistant section displays platform and registry information.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="503" height="255" alt="image" src="https://github.com/user-attachments/assets/ff7dcbbc-d89b-4d54-9864-f785ed8b5fba" /> | <img width="507" height="259" alt="image" src="https://github.com/user-attachments/assets/b3498155-7f58-42e5-bf4c-b6dcc4e5de07" /> |

Unavailable-entity Health analysis waits for Home Assistant registry data before calculating the ratio. This avoids temporary alerts during dashboard loading.

## 🖥️ System

The System section displays CPU, memory and disk usage, IPv4 address, Home Assistant database size, and uptime.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="504" height="178" alt="image" src="https://github.com/user-attachments/assets/17d02233-0ff7-46a5-bd75-4da50e2a2ef7" /> | <img width="504" height="175" alt="image" src="https://github.com/user-attachments/assets/bffefc0f-0473-485d-aa4f-1b0ce875ef9e" /> |

CPU, memory, disk, and database tiles use 24-hour history when available. The Database tile displays its size change over the last 24 hours, and the absolute percentage variation can trigger Health Warning or Critical alerts.

## 🌐 Network

The card automatically discovers network sensors exposed by System Monitor and filters common virtual interfaces.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="504" height="109" alt="image" src="https://github.com/user-attachments/assets/eca49319-962b-4844-bd2c-de354e34d856" /> | <img width="504" height="110" alt="image" src="https://github.com/user-attachments/assets/d84f16b8-4264-465b-a3f4-39760620a23c" /> |

Network speeds are normalized for display when compatible units are available.

## 💾 Storage

Storage volumes are automatically discovered from compatible disk sensors and display the mount point, used and total size, available free space, and usage percentage.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="503" height="151" alt="image" src="https://github.com/user-attachments/assets/07cdb94d-05e4-4b71-a848-ef89d997f7dc" /> | <img width="504" height="151" alt="image" src="https://github.com/user-attachments/assets/e14977f8-a6dc-4f28-be40-a935b769d105" /> |

Disk Warning and Critical thresholds are applied to storage usage.

## 📥 Updates

The Updates section lists update entities that currently report an available update.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="503" height="476" alt="image" src="https://github.com/user-attachments/assets/0dced77e-e247-4a5b-ae76-42ef1cd112bf" /> | <img width="506" height="476" alt="image" src="https://github.com/user-attachments/assets/9a100de0-3957-4518-afc3-41e928d22897" /> |

Available updates are grouped into Home Assistant, Marketplace, Firmware, Apps, and Others. Empty groups are hidden, each visible group shows its item count, and a dedicated **All updates are installed** message is displayed when no updates remain. The total number of available updates can participate in global Health analysis.

## 🗄️ Backups

The Backups section displays backup status, latest backup details, size variation, and the next scheduled backup.

| Light Theme | Dark Theme |
| ----------- | ---------- |
| <img width="505" height="169" alt="image" src="https://github.com/user-attachments/assets/6ea79313-f6ec-4106-8fbe-50cef0aa316d" /> | <img width="505" height="169" alt="image" src="https://github.com/user-attachments/assets/3b54e5d6-11ef-4ca2-a911-4a2e8209ad39" /> |

Backup size, backup-size variation from the previous successful backup, and the latest backup result can participate in global Health analysis.

## 🛠️ Troubleshooting

### System tiles display Not available

- Install or enable the [System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/)
- Check that the required System Monitor sensors are enabled
- Reload the integration, then refresh the dashboard

### Database size is not displayed

- Verify that a database-size sensor exists
- Verify that the sensor reports a supported data-size unit
- Refresh the dashboard after enabling the sensor

### Network data is missing

- Verify that System Monitor exposes incoming and outgoing throughput sensors for a physical interface
- Check that the selected interface is active
- Virtual and loopback interfaces are filtered intentionally

### Backup information is missing

- Verify that Home Assistant backup entities are available
- Run at least one successful backup so that size and date information exist

### Mini graphs are empty

- Check that the entity is recorded by Home Assistant Recorder
- Wait for enough state history to accumulate
- Verify that history access is available to the current user

### Database or backup variation alerts do not appear

- Verify that Home Assistant Recorder stores the database-size and backup-size entities
- Database variation requires usable history from the last 24 hours
- Backup variation requires a previous distinct backup-size value from up to 30 days of history
- Variation alerts evaluate both increases and decreases using the absolute percentage change

### Unavailable entities briefly show no Health issue

The card waits for registry counts before evaluating unavailable entities. This is intentional and prevents inconsistent alerts while Home Assistant data is loading.

## 🔒 Runtime safeguards

- Numeric thresholds are validated and constrained before use
- Entity IDs are validated before opening the Home Assistant More Info dialog
- Missing optional entities render a localized Not available state
- Unsupported languages fall back to English
- Health analysis can be disabled without leaving an unused status indicator
- User preferences use Home Assistant frontend user data

## 📄 License

[![License](https://img.shields.io/github/license/KroFR/ha-server-health-card)](https://github.com/KroFR/ha-server-health-card/blob/main/LICENSE)

Released under the MIT License.
