[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/KroFR/ha-server-health-card)](https://github.com/KroFR/ha-server-health-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home_Assistant-2024.11+-blue)](https://www.home-assistant.io/)
[![HACS Validation](https://github.com/KroFR/ha-server-health-card/actions/workflows/hacs.yaml/badge.svg)](https://github.com/KroFR/ha-server-health-card/actions/workflows/hacs.yaml)
[![License](https://img.shields.io/github/license/KroFR/ha-server-health-card)](https://github.com/KroFR/ha-server-health-card/blob/main/LICENSE)

# ❤️‍🩹 HA Server Health Card

A custom Lovelace card for [Home Assistant](https://www.home-assistant.io/) that brings server health, system resources, Home Assistant information, network activity, storage, updates, and backups into a single compact dashboard card.

HA Server Health Card automatically discovers supported entities, displays 24-hour trends, and calculates a global health status from configurable Warning and Critical thresholds.

<table>
<tr>
<th>Light Theme</th>
<th>Dark Theme</th>
</tr>
<tr>
<td><img src="./img/readme-title-light.png" alt="HA Server Health Card in Light Theme"></td>
<td><img src="./img/readme-title-dark.png" alt="HA Server Health Card in Dark Theme"></td>
</tr>
</table>

## ✨ Features

- Global server health status with configurable Warning and Critical thresholds
- Monitor Home Assistant, CPU, memory, disk, database, network, and storage
- Track available updates and backup status
- 24-hour mini graphs and database-size variation
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

[Open this repository in the Home Assistant Community Store](https://my.home-assistant.io/redirect/hacs_repository/?owner=KroFR&repository=ha-server-health-card)  

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

#### General options

<table>
<tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr>
<tr><td>type</td><td>string</td><td>yes</td><td>—</td><td><code>custom:ha-server-health-card</code></td></tr>
<tr><td>title</td><td>string</td><td>no</td><td>Localized title</td><td>Custom card title</td></tr>
<tr><td>subtitle</td><td>string</td><td>no</td><td>Localized subtitle</td><td>Custom card subtitle</td></tr>
<tr><td>language</td><td>string</td><td>no</td><td>auto</td><td><code>auto</code>, <code>en</code>, or <code>fr</code></td></tr>
<tr><td>show_icon</td><td>boolean</td><td>no</td><td>true</td><td>Show the card icon</td></tr>
<tr><td>show_header</td><td>boolean</td><td>no</td><td>true</td><td>Show the title and subtitle</td></tr>
<tr><td>section_order</td><td>list</td><td>no</td><td>See below</td><td>Order of visible card sections</td></tr>
</table>

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

<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>show_home_assistant</td><td>boolean</td><td>true</td><td>Show Home Assistant versions, components, and entities</td></tr>
<tr><td>show_system</td><td>boolean</td><td>true</td><td>Show CPU, memory, disk, database, IP address, and uptime</td></tr>
<tr><td>show_network</td><td>boolean</td><td>true</td><td>Show download and upload activity</td></tr>
<tr><td>show_storage</td><td>boolean</td><td>true</td><td>Show discovered storage volumes</td></tr>
<tr><td>show_updates</td><td>boolean</td><td>true</td><td>Show available updates</td></tr>
<tr><td>show_backups</td><td>boolean</td><td>true</td><td>Show backup status and schedule</td></tr>
</table>

Sections can be reordered directly from the visual editor. All sections start collapsed when no user preference has been stored.

## ❤️ Health analysis

The global Health bar summarizes the current server state:

- **Healthy**: no configured threshold or check is triggered
- **Warning**: at least one Warning threshold is reached
- **Critical**: at least one Critical threshold is reached

Select the Health bar to display the detected issues. Its open or closed state is saved per Home Assistant user.

#### Default thresholds

<table>
<tr><th>Metric</th><th>Warning</th><th>Critical</th></tr>
<tr><td>CPU</td><td>90%</td><td>98%</td></tr>
<tr><td>Memory</td><td>90%</td><td>98%</td></tr>
<tr><td>Disk</td><td>85%</td><td>95%</td></tr>
<tr><td>Database size</td><td>1500 MB</td><td>3000 MB</td></tr>
<tr><td>Backup size</td><td>1500 MB</td><td>3000 MB</td></tr>
<tr><td>Unavailable entities</td><td>5%</td><td>15%</td></tr>
<tr><td>Available updates</td><td>10</td><td>20</td></tr>
</table>

Additional checks are enabled by default for:

- Home Assistant Core updates
- Home Assistant OS updates
- Failed backups

```yaml
type: custom:ha-server-health-card
health_analysis_enabled: true
health_cpu_warning: 90
health_cpu_critical: 98
health_memory_warning: 90
health_memory_critical: 98
health_disk_warning: 85
health_disk_critical: 95
health_database_warning: 1500
health_database_critical: 3000
health_backup_size_warning: 1500
health_backup_size_critical: 3000
health_unavailable_warning: 5
health_unavailable_critical: 15
health_updates_warning: 10
health_updates_critical: 20
health_check_core_update: true
health_check_os_update: true
health_check_backup: true
```

## 🏠 Home Assistant

The Home Assistant section displays platform and registry information.

### Versions

- Home Assistant Core
- Supervisor
- Home Assistant OS

Core and OS values are highlighted when an update is available.

### Components

- Devices
- Automations
- Helpers
- Apps
- Marketplace

### Entities

- Total entities
- Enabled entities
- Disabled entities
- Unavailable entities

Unavailable-entity Health analysis waits for Home Assistant registry data before calculating the ratio. This avoids temporary alerts during dashboard loading.

## 🖥️ System

The System section displays:

- CPU usage
- Memory usage
- Disk usage
- IPv4 address
- Home Assistant database size
- Uptime

CPU, memory, disk, and database tiles use 24-hour history when available. The Database tile also displays the size change over the last 24 hours.

## 🌐 Network

The card automatically discovers network sensors exposed by System Monitor and filters common virtual interfaces.

- Download rate
- Upload rate
- 24-hour activity graphs

Network speeds are normalized for display when compatible units are available.

## 💾 Storage

Storage volumes are discovered from compatible disk sensors. Each volume shows:

- Mount point
- Used and total size
- Free space when available
- Usage percentage

Disk Warning and Critical thresholds are applied to storage usage.

## 📥 Updates

The Updates section lists update entities that currently report an available update.

Each item includes:

- Component name
- Update category
- Installed version
- Latest available version

The number of available updates can participate in global Health analysis.

## 🗄️ Backups

The Backups section displays:

- Backup Manager status
- Latest successful backup size
- Size variation from the previous backup
- Latest successful backup date
- Next scheduled backup

Backup size and the latest backup result can participate in global Health analysis.

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
