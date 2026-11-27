/*
 * HA Server Health Card for Home Assistant
 * ===============================
 * Responsive Lovelace card for monitoring Home Assistant health.
 *
 * License: MIT
 */

const CARD_VERSION = "2026.11.5";

/* ---------------------------------------------------------------------- */
/*  Languages                                                             */
/* ---------------------------------------------------------------------- */
const TRANSLATIONS = {
	en: {
	common: {
		unavailable: "Unavailable",
		unknown: "Unknown",
		notAvailable: "Not available",
		entityNotFound: "Entity not found",
		enabled: "Enabled",
		disabled: "Disabled",
	},
	card: {
		title: "Home Assistant Server",
		subtitle: "Server health and system monitoring",
		healthy: "Healthy",
		warning: "Warning",
		critical: "Critical",
		noIssues: "No issue detected",
		updatesUpToDate: "All updates are installed",
		healthDetails: "Health details",
	},
	sections: {
		systemVersions: "Home Assistant",
		system: "System",
		network: "Network",
		storage: "Storage",
		instance: "Home Assistant",
		health: "Health",
		updates: "Updates",
		backups: "Backups",
		database: "Database",
		containersApps: "Containers & Apps",
	},
	labels: {
		cpu: "CPU",
		memory: "Memory",
		disk: "Disk",
		database: "Database",
		backupSizeHealth: "Backup size",
		databaseVariationHealth: "Database size variation",
		backupVariationHealth: "Backup size variation",
		uptime: "Uptime",
		ipv4: "IPv4 address",
		download: "Download",
		upload: "Upload",
		apps: "Apps",
		marketplace: "Marketplace",
		devices: "Devices",
		entities: "Entities",
		configuration: "Components",
		total: "Total",
		enabledEntities: "Enabled",
		disabledEntities: "Disabled",
		automations: "Automations",
		scripts: "Scripts",
		scenes: "Scenes",
		helpers: "Helpers",
		unavailableEntities: "Unavailable",
		repairs: "Repairs",
		warnings: "Warnings",
		errors: "Errors",
		unavailableRatio: "Unavailable entities",
		availableUpdates: "Available updates",
		haCoreUpdateAvailable: "HA Core update",
		haOsUpdateAvailable: "HA OS update",
		available: "available",
		update: "Update",
		updateTypeMarketplace: "Marketplace",
		updateTypeApplication: "Application",
		updateTypeFirmware: "Firmware",
		updateGroupHomeAssistant: "Home Assistant",
		updateGroupMarketplace: "Marketplace",
		updateGroupFirmware: "Firmware",
		updateGroupApps: "Apps",
		updateGroupOthers: "Others",
		lastBackup: "Last successful backup",
		nextBackup: "Next backup",
		backupStatus: "Manager status",
		backupSize: "Last backup size",
		backupOk: "Success",
		backupFailed: "Failed",
		backupSizeChange: "Change since previous backup: {percent}%",
		databaseSizeChange: "Change over the last 24 hours: {percent}%",
		hoursAgo: "{hours} h ago",
		inHours: "in {hours} h",
		installed: "Installed",
		latest: "Latest",
		haCore: "HA Core",
		supervisor: "Supervisor",
		haOs: "HA OS",
		updateAvailable: "Update available",
		upToDate: "Up to date",
		issues: "Issues",
		usedOf: "{used} used of {total}",
		freeSpace: "{free} free",
		backupLocations: "Backup locations",
		backupCount: "{count} backups",
		backupLatest: "Latest: {date}",
		backupProtected: "Encrypted",
		backupDetails: "Backups",
		backupAutomatic: "Automatic",
		backupAppUpdate: "App update",
		backupFailureReason: "Failed: {reason}",
		backupFailedDestination: "Destination: {name}",
		backupFailedAddon: "App: {name}",
		backupFailedFolder: "Folder: {name}",
		databaseSize: "Database size",
		databaseGrowth7d: "Growth · 7 days",
		recorder: "Recorder",
		backlog: "Backlog",
		running: "Running",
		notRunning: "Not running",
		containers: "System containers",
		containerApps: "Apps",
		runningCount: "{running}/{total} Running",
		stopped: "Stopped",
		cpuShort: "CPU",
		ramShort: "RAM",
	},
	editor: {
		title: "Card title",
		language: "Language",
		auto: "Automatic",
		showHomeAssistant: "Show Home Assistant",
		showSystem: "Show System",
		showNetwork: "Show Network",
		showStorage: "Show Storage",
		showInstance: "Show Home Assistant statistics",
		showHealth: "Show Health",
		showUpdates: "Show Updates",
		showBackups: "Show Backups",
		showDatabase: "Show Database",
		showContainersApps: "Show Containers & Apps",
		general: "General",
		cardLayout: "Card layout",
		healthAnalysis: "Health analysis",
		healthAnalysisEnabled: "Enable health analysis",
		healthStatusDisplay: "Health status display",
		healthStatusAlways: "Always",
		healthStatusProblems: "Only when there is a problem",
		healthStatusNever: "Never",
		healthThresholds: "Health thresholds",
		healthVariationThresholds: "Variation thresholds · 24 hours",
		warningThreshold: "Warning threshold",
		criticalThreshold: "Critical threshold",
		thresholdOrderError: "Warning must be lower than Critical",
		unavailableThreshold: "Unavailable entities threshold (%)",
		updatesThreshold: "Available updates threshold",
		platformChecks: "Additional checks",
		checkHaCoreUpdate: "Alert when an HA Core update is available",
		checkHaOsUpdate: "Alert when an HA OS update is available",
		checkBackupFailure: "Alert when the latest backup failed",
		subtitle: "Card subtitle",
		showIcon: "Show icon",
		showHeader: "Show title and subtitle",
		sections: "Sections",
		entities: "Entities",
		moveUp: "Move up",
		moveDown: "Move down",
		cpuEntity: "CPU entity",
		memoryEntity: "Memory entity",
		diskEntity: "Disk usage entity",
		databaseEntity: "Database size entity",
		uptimeEntity: "Uptime entity",
		ipv4Entity: "IPv4 entity",
		networkInEntity: "Network download entity",
		networkOutEntity: "Network upload entity",
		haCoreUpdateEntity: "HA Core update entity",
		supervisorUpdateEntity: "Supervisor update entity",
		haOsUpdateEntity: "HA OS update entity",
		backupStatusEntity: "Backup status entity",
		lastBackupEntity: "Last successful backup entity",
		lastBackupSizeEntity: "Last successful backup size entity",
		nextBackupEntity: "Next backup entity",
	},
	},
	fr: {
	common: {
		unavailable: "Indisponible",
		unknown: "Inconnu",
		notAvailable: "Non disponible",
		entityNotFound: "Entité introuvable",
		enabled: "Activé",
		disabled: "Désactivé",
	},
	card: {
		title: "Serveur Home Assistant",
		subtitle: "Santé du serveur et supervision du système",
		healthy: "Sain",
		warning: "Vigilance",
		critical: "Critique",
		noIssues: "Aucun problème détecté",
		updatesUpToDate: "Toutes les mises à jour sont installées",
		healthDetails: "Détails de santé",
	},
	sections: {
		systemVersions: "Home Assistant",
		system: "Système",
		network: "Réseau",
		storage: "Stockage",
		instance: "Home Assistant",
		health: "Santé",
		updates: "Mises à jour",
		backups: "Sauvegardes",
		database: "Base de données",
		containersApps: "Conteneurs & Apps",
	},
	labels: {
		cpu: "CPU",
		memory: "Mémoire",
		disk: "Disque",
		database: "Base de données",
		backupSizeHealth: "Taille de la sauvegarde",
		databaseVariationHealth: "Variation de la base de données",
		backupVariationHealth: "Variation de la sauvegarde",
		uptime: "Disponibilité",
		ipv4: "Adresse IPv4",
		download: "Téléchargement",
		upload: "Envoi",
		apps: "Apps",
		marketplace: "Marketplace",
		devices: "Appareils",
		entities: "Entités",
		configuration: "Composants",
		total: "Total",
		enabledEntities: "Activées",
		disabledEntities: "Désactivées",
		automations: "Automatisations",
		scripts: "Scripts",
		scenes: "Scènes",
		helpers: "Entrées",
		unavailableEntities: "Indisponibles",
		repairs: "Réparations",
		warnings: "Avertissements",
		errors: "Erreurs",
		unavailableRatio: "Entités indisponibles",
		availableUpdates: "Mises à jour disponibles",
		haCoreUpdateAvailable: "Mise à jour HA Core",
		haOsUpdateAvailable: "Mise à jour HA OS",
		available: "disponible(s)",
		update: "Mettre à jour",
		updateTypeMarketplace: "Marketplace",
		updateTypeApplication: "Application",
		updateTypeFirmware: "Firmware",
		updateGroupHomeAssistant: "Home Assistant",
		updateGroupMarketplace: "Marketplace",
		updateGroupFirmware: "Firmware",
		updateGroupApps: "Apps",
		updateGroupOthers: "Autres",
		lastBackup: "Dernière sauvegarde réussie",
		nextBackup: "Prochaine sauvegarde",
		backupStatus: "État du gestionnaire",
		backupSize: "Taille de la dernière sauvegarde",
		backupOk: "Réussie",
		backupFailed: "Échec",
		backupSizeChange: "Variation depuis la sauvegarde précédente : {percent} %",
		databaseSizeChange: "Variation sur les dernières 24 heures : {percent} %",
		hoursAgo: "il y a {hours} h",
		inHours: "dans {hours} h",
		installed: "Installée",
		latest: "Disponible",
		haCore: "HA Core",
		supervisor: "Supervisor",
		haOs: "HA OS",
		updateAvailable: "Mise à jour disponible",
		upToDate: "À jour",
		issues: "Problèmes",
		usedOf: "{used} utilisés sur {total}",
		freeSpace: "{free} libres",
		backupLocations: "Emplacements de sauvegarde",
		backupCount: "{count} sauvegardes",
		backupLatest: "Dernière : {date}",
		backupProtected: "Chiffrée",
		backupDetails: "Sauvegardes",
		backupAutomatic: "Automatique",
		backupAppUpdate: "Mise à jour d’App",
		backupFailureReason: "Échec : {reason}",
		backupFailedDestination: "Destination : {name}",
		backupFailedAddon: "App : {name}",
		backupFailedFolder: "Dossier : {name}",
		databaseSize: "Taille de la base",
		databaseGrowth7d: "Croissance · 7 jours",
		recorder: "Recorder",
		backlog: "File d’attente",
		running: "En marche",
		notRunning: "Arrêté",
		containers: "Conteneurs système",
		containerApps: "Apps",
		runningCount: "{running}/{total} Actifs",
		stopped: "Arrêté",
		cpuShort: "CPU",
		ramShort: "RAM",
	},
	editor: {
		title: "Titre de la carte",
		language: "Langue",
		auto: "Automatique",
		showHomeAssistant: "Afficher Home Assistant",
		showSystem: "Afficher Système",
		showNetwork: "Afficher Réseau",
		showStorage: "Afficher Stockage",
		showInstance: "Afficher les statistiques Home Assistant",
		showHealth: "Afficher Santé",
		showUpdates: "Afficher Mises à jour",
		showBackups: "Afficher Sauvegardes",
		showDatabase: "Afficher Base de données",
		showContainersApps: "Afficher Conteneurs & Apps",
		general: "Général",
		cardLayout: "Disposition de la carte",
		healthAnalysis: "Analyse de santé",
		healthAnalysisEnabled: "Activer l’analyse de santé",
		healthStatusDisplay: "Affichage de l’état de santé",
		healthStatusAlways: "Toujours",
		healthStatusProblems: "Uniquement en cas de problème",
		healthStatusNever: "Jamais",
		healthThresholds: "Seuils de santé",
		healthVariationThresholds: "Seuils de variation · 24 heures",
		warningThreshold: "Seuil de vigilance",
		criticalThreshold: "Seuil Critique",
		thresholdOrderError: "Le seuil de vigilance doit être inférieur au seuil critique",
		unavailableThreshold: "Seuil d’entités indisponibles (%)",
		updatesThreshold: "Seuil de mises à jour disponibles",
		platformChecks: "Contrôles supplémentaires",
		checkHaCoreUpdate: "Alerter si une mise à jour HA Core est disponible",
		checkHaOsUpdate: "Alerter si une mise à jour HA OS est disponible",
		checkBackupFailure: "Alerter si la dernière sauvegarde a échoué",
		subtitle: "Sous-titre de la carte",
		showIcon: "Afficher l’icône",
		showHeader: "Afficher le titre et le sous-titre",
		sections: "Sections",
		entities: "Entités",
		moveUp: "Monter",
		moveDown: "Descendre",
		cpuEntity: "Entité CPU",
		memoryEntity: "Entité mémoire",
		diskEntity: "Entité utilisation disque",
		databaseEntity: "Entité taille de la base de données",
		uptimeEntity: "Entité disponibilité",
		ipv4Entity: "Entité IPv4",
		networkInEntity: "Entité trafic entrant",
		networkOutEntity: "Entité trafic sortant",
		haCoreUpdateEntity: "Entité de mise à jour HA Core",
		supervisorUpdateEntity: "Entité de mise à jour Supervisor",
		haOsUpdateEntity: "Entité de mise à jour HA OS",
		backupStatusEntity: "Entité état de sauvegarde",
		lastBackupEntity: "Entité dernière sauvegarde réussie",
		lastBackupSizeEntity: "Entité taille de la dernière sauvegarde",
		nextBackupEntity: "Entité prochaine sauvegarde",
	},
	},
};

function resolveLanguage(hass, configuredLanguage = "auto") {
	if (configuredLanguage !== "auto" && TRANSLATIONS[configuredLanguage]) return configuredLanguage;
	const language = String(hass?.locale?.language || hass?.language || "en")
		.toLowerCase()
		.split("-")[0];
	return TRANSLATIONS[language] ? language : "en";
}

function translate(language, path) {
	const readPath = (source) => path.split(".").reduce((value, key) => value?.[key], source);
	return String(readPath(TRANSLATIONS[language]) ?? readPath(TRANSLATIONS.en) ?? path);
}

/* -------------------------------------------------------------------------- */
/*  Default configuration                                                     */
/* -------------------------------------------------------------------------- */
const DEFAULT_CONFIG = {
	type: "custom:ha-server-health-card",
	title: "",
	subtitle: "",
	language: "auto",
	show_icon: true,
	show_header: true,
	section_order: ["home-assistant", "system", "network", "storage", "database", "containers-apps", "updates", "backups"],
	show_home_assistant: true,
	show_system: true,
	show_network: true,
	show_storage: true,
	show_database: true,
	show_containers_apps: true,
	show_updates: true,
	show_backups: true,
	health_analysis_enabled: true,
	health_status_display: "always",
	health_cpu_warning: 90,
	health_cpu_critical: 98,
	health_memory_warning: 90,
	health_memory_critical: 98,
	health_disk_warning: 85,
	health_disk_critical: 95,
	health_database_warning: 1500,
	health_database_critical: 3000,
	health_backup_size_warning: 1500,
	health_backup_size_critical: 3000,
	health_database_variation_warning: 25,
	health_database_variation_critical: 50,
	health_backup_variation_warning: 25,
	health_backup_variation_critical: 50,
	health_unavailable_warning: 5,
	health_unavailable_critical: 15,
	health_updates_warning: 10,
	health_updates_critical: 20,
	health_check_core_update: true,
	health_check_os_update: true,
	health_check_backup: true,
};

/* ---------------------------------------------------------------------- */
/*  Main card                                                             */
/* ---------------------------------------------------------------------- */
class HaServerHealthCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this._config = null;
		this._hass = null;
		this._entities = {};
		this._collapsed = this._defaultCollapsedSections();
		this._healthDetailsOpen = false;
		this._collapsedStorageKey = null;
		this._collapsedLoading = false;
		this._collapsedLoaded = false;
		this._unsubscribeCollapsed = null;
		this._initialized = false;
		this._metricHistory = { key: "", loadedAt: 0, loading: false, series: {} };
		this._registryCounts = { apps: null, marketplace: null, devices: null, entities: null, enabledEntities: null, disabledEntities: null, automations: null, helpers: null, unavailable: null };
		this._marketplaceUpdateEntities = new Set();
		this._entityRegistry = [];
		this._deviceRegistry = [];
		this._discoveryRegistry = null;
		this._discoveryStates = null;
		this._discoveryResult = null;
		this._signedPictureUrls = new Map();
		this._signedPictureLoading = new Set();
		this._sectionSignatures = new Map();
		this._registryLoading = false;
		this._registryLoadedFor = null;
		this._registryLoadedAt = 0;
		this._registrySourceSignature = "";
		this._localeSignature = "";
		this._translationLanguage = "";
		this._backupSizeHistory = { key: "", loading: false, loadedAt: 0, previous: null, delta: null, percent: null };
		this._backupManager = { loading: false, loadedAt: 0, backups: [], agents: [], error: null };
		this._backupDetailsOpen = false;
		this._recorderInfo = { loading: false, loadedAt: 0, data: null };
		this._databaseHistory7d = { key: "", loading: false, loadedAt: 0, points: [] };
		this._containersApps = { infoLoading: false, statsLoading: false, infoLoadedAt: 0, statsLoadedAt: 0, systems: [], apps: [] };
		this._containersAppsLoadPromise = null;
		this._containersAppsRefreshTimer = null;
		this._containerGroupsCollapsed = new Set(["systems", "apps"]);
	}

	static getConfigElement() {
		return document.createElement("ha-server-health-card-editor");
	}

	static getStubConfig() {
		return { ...DEFAULT_CONFIG };
	}

	setConfig(config) {
		if (!config) {
			throw new Error("Invalid configuration");
		}

		this._config = {
			...DEFAULT_CONFIG,
			...config,
			section_order: this._normalizeSectionOrder(config.section_order),
		};

		this._collapsedLoaded = false;
		this._ensureCollapsedSectionsStorage();
		this._render();
	}

	set hass(hass) {
		const firstUpdate = !this._hass;
		const previousLocaleSignature = this._localeSignature;
		const previousTranslationLanguage = this._translationLanguage;
		this._hass = hass;
		this.classList.toggle("dark-mode", Boolean(hass?.themes?.darkMode));
		this._localeSignature = this._localePreferencesSignature();
		this._translationLanguage = this._language();
		const localePreferencesChanged = Boolean(previousLocaleSignature && previousLocaleSignature !== this._localeSignature);
		const translationLanguageChanged = Boolean(previousTranslationLanguage && previousTranslationLanguage !== this._translationLanguage);
		if (!this._config) return;
		this._entities = this._detectEntities();
		this._ensureCollapsedSectionsStorage();
		setTimeout(() => {
			this._loadMetricHistory();
			this._loadFrontendCounts();
			this._loadBackupManager();
			this._loadRecorderInfo();
			this._loadDatabaseHistory7d();
		}, 0);
		if (firstUpdate) this._startContainersAppsRefresh();
		if (firstUpdate || translationLanguageChanged || !this._initialized || !this.shadowRoot.querySelector("ha-card")) {
			this._initialized = true;
			this._render();
			return;
		}
		this._refreshDynamicContent(localePreferencesChanged ? ["backups"] : null);
	}

	getCardSize() {
		return 10;
	}

	_language() {
		return resolveLanguage(this._hass, this._config?.language || "auto");
	}

	_t(path) {
		return translate(this._language(), path);
	}

	_normalizeSectionOrder(value) {
		const defaults = ["home-assistant", "system", "network", "storage", "database", "containers-apps", "updates", "backups"];
		const source = Array.isArray(value) ? value.filter((id) => defaults.includes(id)) : [];
		return [...new Set([...source, ...defaults])];
	}

	_sectionVisible(id) {
		const keys = {
			"home-assistant": "show_home_assistant", system: "show_system", network: "show_network",
			storage: "show_storage", database: "show_database", "containers-apps": "show_containers_apps", updates: "show_updates", backups: "show_backups",
		};
		return this._config?.[keys[id]] !== false;
	}

	_renderConfiguredSections(counts, updates) {
		return this._normalizeSectionOrder(this._config?.section_order).filter((id) => this._sectionVisible(id)).map((id) => {
			if (id === "home-assistant") return this._renderHomeAssistant(counts);
			if (id === "system") return this._renderSystem();
			if (id === "network") return this._renderNetwork();
			if (id === "storage") return this._renderStorage();
			if (id === "database") return this._renderDatabase();
			if (id === "containers-apps") return this._renderContainersApps();
			if (id === "updates") return this._renderUpdates(updates);
			if (id === "backups") return this._renderBackups();
			return "";
		}).join("");
	}

	_detectEntities() {
		const discovered = this._discoverEntitiesFromRegistry();
		const keys = [
			"cpu", "memory", "disk", "database", "uptime", "ipv4",
			"networkIn", "networkOut",
			"haCoreUpdate", "supervisorUpdate", "haOsUpdate",
			"backupStatus", "lastBackup", "nextBackup", "lastBackupSize",
		];
		return Object.fromEntries(keys.map((key) => {
			const override = this._config?.[`${this._camelToSnake(key)}_entity`];
			return [key, override || discovered[key] || null];
		}));
	}

	_discoveryArgument(entry, state, group) {
		const name = String(state?.attributes?.friendly_name || "");
		if (group === "disk") {
			const match = name.match(/(\/[^]*)$/);
			if (match?.[1]) return match[1].trim();
		}
		const id = entry.entity_id.split(".")[1] || "";
		const patterns = group === "network"
			? [/throughput_network_(?:in|out)_(.+)$/i, /network_throughput_(?:in|out)_(.+)$/i, /ipv[46]_address_(.+)$/i, /network_(?:in|out)_(.+)$/i]
			: [/disk_(?:free|use|use_percent|usage)(?:_(.+))?$/i];
		for (const pattern of patterns) {
			const match = id.match(pattern);
			if (match) return group === "disk" ? (match[1] ? `/${match[1].replace(/_/g, "/")}` : "/") : match[1];
		}
		return group === "disk" ? "/" : "";
	}

	_discoverEntitiesFromRegistry() {
		const registry = this._entityRegistry.length ? this._entityRegistry : Object.values(this._hass?.entities || {});
		const states = this._hass?.states;
		if (!states) return {};
		const registrySource = this._entityRegistry.length ? this._entityRegistry : this._hass?.entities;
		if (this._discoveryRegistry === registrySource && this._discoveryResult && (this._entityRegistry.length || this._discoveryStates === states)) return this._discoveryResult;
		const result = { networks: {}, disks: {} };
		const devicesById = new Map(this._deviceRegistry.map((device) => [device.id, device]));
		const scalarKeys = {
			processor_use: "cpu", memory_use_percent: "memory", last_boot: "uptime", uptime: "uptime",
		};
		const networkKeys = {
			throughput_network_in: "networkIn", network_throughput_in: "networkIn",
			throughput_network_out: "networkOut", network_throughput_out: "networkOut",
			ipv4_address: "ipv4",
		};
		const diskKeys = new Set(["disk_free", "disk_use", "disk_use_percent"]);
		for (const entry of registry) {
			if (!entry?.entity_id || entry.hidden || entry.disabled_by != null || !states[entry.entity_id]) continue;
			const state = states[entry.entity_id];
			const key = entry.translation_key || "";
			if (entry.platform === "systemmonitor") {
				const scalar = scalarKeys[key] || (!key && state.attributes?.device_class === "uptime" ? "uptime" : null);
				if (scalar) result[scalar] ??= entry.entity_id;
				const network = networkKeys[key];
				if (network) {
					const iface = this._discoveryArgument(entry, state, "network");
					if (iface) (result.networks[iface] ??= {})[network] ??= entry.entity_id;
				}
				if (diskKeys.has(key)) {
					const mount = this._discoveryArgument(entry, state, "disk");
					(result.disks[mount] ??= {})[key] ??= entry.entity_id;
				}
			}
			if (entry.entity_id.startsWith("sensor.")) {
				const device = devicesById.get(entry.device_id);
				const haystack = `${device?.name || ""} ${device?.name_by_user || ""} ${entry.entity_id} ${state.attributes?.friendly_name || ""}`.toLowerCase();
				const isDataSize = state.attributes?.state_class === "measurement" && state.attributes?.device_class === "data_size";
				const isDatabase = String(state.attributes?.engine || "").toLowerCase() === "sqlite"
					|| /home.assistant_v2[._]db|database|base_de_donnees|base de données/i.test(haystack);
				if (isDataSize && isDatabase) result.database ??= entry.entity_id;
			}
			if (entry.platform === "backup") {
				if (key === "backup_manager_state") result.backupStatus ??= entry.entity_id;
				if (key === "last_successful_automatic_backup") result.lastBackup ??= entry.entity_id;
				if (key === "next_scheduled_automatic_backup") result.nextBackup ??= entry.entity_id;
				const device = devicesById.get(entry.device_id);
				const isBackupDevice = /backup|sauvegarde/i.test(`${device?.name || ""} ${device?.name_by_user || ""}`);
				const isBackupSize = state.attributes?.state_class === "measurement" && state.attributes?.device_class === "data_size";
				if (isBackupSize && (key === "last_successful_automatic_backup_size" || isBackupDevice)) result.lastBackupSize ??= entry.entity_id;
			}
		}
		const physical = Object.keys(result.networks).filter((name) => !/^(lo|docker\d*|hassio|veth.*|br-.*|virbr\d*|dummy\d*)$/i.test(name));
		const selectedInterface = physical.find((name) => result.networks[name].networkIn || result.networks[name].networkOut)
			|| Object.keys(result.networks).find((name) => result.networks[name].networkIn || result.networks[name].networkOut);
		if (selectedInterface) Object.assign(result, result.networks[selectedInterface], { networkInterface: selectedInterface });
		const rootMount = result.disks["/"] ? "/" : Object.keys(result.disks)[0];
		if (rootMount) result.disk = result.disks[rootMount].disk_use_percent || result.disks[rootMount].disk_use || result.disks[rootMount].disk_free;
		for (const id of new Set([...Object.keys(states), ...registry.map((entry) => entry.entity_id)])) {
			if (!states[id]) continue;
			if (/^update\.home_assistant_core(?:_|$)/.test(id)) result.haCoreUpdate ??= id;
			else if (/^update\.home_assistant_supervisor(?:_|$)/.test(id)) result.supervisorUpdate ??= id;
			else if (/^update\.home_assistant_operating_system(?:_|$)/.test(id)) result.haOsUpdate ??= id;
		}
		this._discoveryRegistry = registrySource;
		this._discoveryStates = this._entityRegistry.length ? null : states;
		this._discoveryResult = result;
		return result;
	}

	_camelToSnake(value) {
		return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
	}

	_state(entityId) {
		return entityId ? this._hass?.states?.[entityId] : null;
	}

	_stateValue(entityId, fallback = null) {
		const state = this._state(entityId);

		if (!state || ["unknown", "unavailable"].includes(state.state)) {
			return fallback;
		}

		return state.state;
	}

	_numericState(entityId, fallback = null) {
		const value = Number.parseFloat(this._stateValue(entityId));
		return Number.isFinite(value) ? value : fallback;
	}

	_formatEntity(entityId, options = {}) {
		const state = this._state(entityId);

		if (!state) {
			return this._t("common.notAvailable");
		}

		if (["unknown", "unavailable"].includes(state.state)) {
			return this._t(`common.${state.state}`);
		}

		const numericValue = options.raw ? NaN : Number.parseFloat(state.state);
		const decimals = options.decimals ?? 1;
		const value = Number.isFinite(numericValue)
			? new Intl.NumberFormat(this._language(), { maximumFractionDigits: decimals }).format(numericValue)
			: state.state;
		const unit = state.attributes?.unit_of_measurement || options.unit || "";

		return `${value}${unit ? ` ${unit}` : ""}`;
	}

	_formatUptime(entityId) {
		const value = this._stateValue(entityId);
		if (!value) return this._t("common.notAvailable");
		const state = this._state(entityId);
		const unit = String(state?.attributes?.unit_of_measurement || "").toLowerCase();
		let seconds;
		const numeric = Number.parseFloat(value);
		if (Number.isFinite(numeric) && ["s", "sec", "second", "seconds"].includes(unit)) seconds = numeric;
		else if (Number.isFinite(numeric) && ["min", "minute", "minutes"].includes(unit)) seconds = numeric * 60;
		else if (Number.isFinite(numeric) && ["h", "hour", "hours"].includes(unit)) seconds = numeric * 3600;
		else {
			const started = Date.parse(value);
			if (Number.isFinite(started)) seconds = Math.max(0, (Date.now() - started) / 1000);
		}
		if (!Number.isFinite(seconds)) return value;
		const totalHours = Math.floor(seconds / 3600);
		const days = Math.floor(totalHours / 24);
		const hours = totalHours % 24;
		return `${days}d ${hours}h`;
	}

	_localePreferencesSignature() {
		const locale = this._hass?.locale || {};
		return JSON.stringify({
			language: this._hass?.language || locale.language || "",
			dateFormat: locale.date_format || "language",
			timeFormat: locale.time_format || "language",
			timeZone: locale.time_zone || "local",
			serverTimeZone: this._hass?.config?.time_zone || "",
		});
	}

	_formatDateValue(value) {
		if (!value) return this._t("common.notAvailable");
		const date = new Date(value);
		if (Number.isNaN(date.getTime())) return String(value);
		const locale = this._hass?.locale || {};
		const dateFormat = locale.date_format || "language";
		const timeFormat = locale.time_format || "language";
		const timeZonePreference = locale.time_zone || "local";
		const serverTimeZone = this._hass?.config?.time_zone;
		const timeZone = timeZonePreference === "server" && serverTimeZone ? serverTimeZone : undefined;
		const userLanguage = this._hass?.language || locale.language || navigator.language;
		const formatterLanguage = dateFormat === "system" ? undefined : userLanguage;
		const parts = new Intl.DateTimeFormat(formatterLanguage, { day: "2-digit", month: "2-digit", year: "numeric", timeZone }).formatToParts(date);
		const part = (type) => parts.find((item) => item.type === type)?.value || "";
		const literal = parts.find((item) => item.type === "literal")?.value || "/";
		let formattedDate;
		if (["DMY", "DD/MM/YYYY"].includes(dateFormat)) formattedDate = `${part("day")}${literal}${part("month")}${literal}${part("year")}`;
		else if (["MDY", "MM/DD/YYYY"].includes(dateFormat)) formattedDate = `${part("month")}${literal}${part("day")}${literal}${part("year")}`;
		else if (["YMD", "YYYY-MM-DD"].includes(dateFormat)) formattedDate = `${part("year")}${literal}${part("month")}${literal}${part("day")}`;
		else formattedDate = new Intl.DateTimeFormat(formatterLanguage, { year: "numeric", month: "numeric", day: "numeric", timeZone }).format(date);
		const timeLanguage = timeFormat === "system" ? undefined : userLanguage;
		const use12Hour = timeFormat === "12" ? true : timeFormat === "24" ? false : undefined;
		const timeOptions = { hour: "numeric", minute: "2-digit", timeZone };
		if (use12Hour !== undefined) {
			timeOptions.hour12 = use12Hour;
			timeOptions.hourCycle = use12Hour ? "h12" : "h23";
		}
		const formattedTime = new Intl.DateTimeFormat(timeLanguage, timeOptions).format(date);
		return `${formattedDate} ${formattedTime}`;
	}

	_formatDate(entityId) {
		return this._formatDateValue(this._stateValue(entityId));
	}

	_formatRelativeHours(entityId, direction) {
		const value = this._stateValue(entityId);
		const timestamp = value ? Date.parse(value) : NaN;
		if (!Number.isFinite(timestamp)) return "";
		const difference = direction === "future" ? timestamp - Date.now() : Date.now() - timestamp;
		const hours = Math.max(0, Math.round(difference / 3600000));
		const template = this._t(direction === "future" ? "labels.inHours" : "labels.hoursAgo");
		return template.replace("{hours}", new Intl.NumberFormat(this._language()).format(hours));
	}
	_backupDateTile(icon, label, entityId, direction) {
		const date = this._formatDate(entityId);
		const relative = this._formatRelativeHours(entityId, direction);
		const attributes = entityId ? ` role="button" tabindex="0" data-more-info="${this._escape(entityId)}"` : "";
		return `<div class="version-tile system-info-tile backup-date-tile"${attributes}><ha-icon icon="${icon}"></ha-icon><span><small>${label}</small><strong>${this._escape(date)}</strong>${relative ? `<em>(${this._escape(relative)})</em>` : ""}</span></div>`;
	}



	_availableUpdates() {
		if (!this._hass?.states) {
			return [];
	}

	return Object.values(this._hass.states)
		.filter((state) => state.entity_id.startsWith("update.") && state.state === "on")
		.sort((a, b) => (a.attributes.friendly_name || a.entity_id).localeCompare(
		b.attributes.friendly_name || b.entity_id
		));
	}

	_instanceCounts() {
		return { ...this._registryCounts };
	}

	_frontendAutomationCount(entityRegistry) {
		const registryById = new Map((entityRegistry || []).map((entry) => [entry.entity_id, entry]));
		const automationIds = new Set();
		for (const state of Object.values(this._hass?.states || {})) {
			if (!state.entity_id.startsWith("automation.")) continue;
			const entry = registryById.get(state.entity_id);
			const automationId = state.attributes?.id;
			if (automationId == null || entry?.disabled_by != null || entry?.hidden) continue;
			automationIds.add(String(automationId));
		}
		return automationIds.size;
	}

	async _frontendHelperCount(configEntries, entityRegistry) {
		const collectionDomains = [
			"input_boolean", "input_button", "input_datetime", "input_number", "input_select",
			"input_text", "counter", "timer", "schedule",
		];
		const [collectionResults, helperHandlers] = await Promise.all([
			Promise.all(collectionDomains.map(async (domain) => {
				try {
					const result = await this._hass.callWS({ type: `${domain}/list` });
					return Array.isArray(result) ? result.length : 0;
				} catch (_error) {
					return 0;
				}
			})),
			this._hass.callApi("GET", "config/config_entries/flow_handlers?type=helper").catch(() => []),
		]);
		const helperDomains = new Set((Array.isArray(helperHandlers) ? helperHandlers : [])
			.map((domain) => String(domain || "").toLowerCase())
			.filter(Boolean));
		const helperConfigEntryIds = new Set((configEntries || [])
			.filter((entry) => entry?.disabled_by == null && helperDomains.has(String(entry?.domain || "").toLowerCase()))
			.map((entry) => entry.entry_id)
			.filter(Boolean));
		const flowHelperEntities = (entityRegistry || []).filter((entry) =>
			entry?.disabled_by == null
			&& entry?.config_entry_id
			&& helperConfigEntryIds.has(entry.config_entry_id)
		).length;
		return collectionResults.reduce((total, count) => total + count, 0) + flowHelperEntities;
	}

	async _loadFrontendCounts() {
		if (!this._hass?.callWS) return;
		const source = this._hass.connection;
		const sourceSignature = `${Object.keys(this._hass?.entities || {}).length}|${Object.keys(this._hass?.devices || {}).length}`;
		const cacheValid = this._registryLoadedFor === source
			&& this._registrySourceSignature === sourceSignature
			&& Date.now() - this._registryLoadedAt < 300000;
		if (this._registryLoading || cacheValid) return;
		this._registryLoading = true;
		try {
			const isAdmin = this._hass?.user?.is_admin === true;
			const [configEntries, devices, entityRegistry, supervisor] = await Promise.all([
				this._hass.callWS({ type: "config_entries/get" }),
				this._hass.callWS({ type: "config/device_registry/list" }),
				this._hass.callWS({ type: "config/entity_registry/list" }),
				isAdmin ? this._hass.callWS({ type: "supervisor/api", endpoint: "/addons", method: "get" }).catch(() => null) : Promise.resolve(null),
			]);
			const previousEntities = JSON.stringify(this._entities);
			this._entityRegistry = Array.isArray(entityRegistry) ? entityRegistry : [];
			this._deviceRegistry = Array.isArray(devices) ? devices : [];
			this._discoveryRegistry = null;
			this._discoveryResult = null;
			this._entities = this._detectEntities();
			if (previousEntities !== JSON.stringify(this._entities)) this._metricHistory = { key: "", loadedAt: 0, loading: false, series: {} };
			const registryDevices = Array.isArray(devices) ? devices : [];
			const registryEntities = Array.isArray(entityRegistry) ? entityRegistry : [];
			const entityIds = new Set(registryEntities.map((entry) => entry?.entity_id).filter(Boolean));
			for (const entityId of Object.keys(this._hass?.states || {})) entityIds.add(entityId);
			const disabledEntityIds = new Set(registryEntities.filter((entry) => entry?.entity_id && entry?.disabled_by != null).map((entry) => entry.entity_id));
			const enabledEntityIds = new Set([...entityIds].filter((entityId) => !disabledEntityIds.has(entityId)));
			const addons = supervisor?.data?.addons ?? supervisor?.addons ?? supervisor?.data ?? supervisor;
			const marketplaceInstalledEntities = registryEntities.filter((entry) => {
				if (!entry?.entity_id?.startsWith("update.")) return false;
				const state = this._hass?.states?.[entry.entity_id];
				if (state?.attributes?.installed_version == null) return false;
				const platform = String(entry.platform || "").toLowerCase();
				const entityId = String(entry.entity_id || "").toLowerCase();
				const name = `${state.attributes?.title || ""} ${state.attributes?.friendly_name || ""}`.toLowerCase();
				const category = String(state.attributes?.category || state.attributes?.update_category || "").toLowerCase();
				return platform === "marketplace"
					|| platform === "hacs"
					|| category === "marketplace"
					|| category === "plugin"
					|| /(?:^|[._-])hacs(?:[._-]|$)|marketplace|custom[ _-]?(?:component|card)|plugin/.test(`${entityId} ${name}`);
			});
			this._marketplaceUpdateEntities = new Set(marketplaceInstalledEntities.map((entry) => entry.entity_id));
			this._registryCounts = {
				apps: Array.isArray(addons) ? addons.length : null,
				marketplace: marketplaceInstalledEntities.length,
				devices: registryDevices.length,
				entities: entityIds.size,
				enabledEntities: enabledEntityIds.size,
				disabledEntities: disabledEntityIds.size,
				automations: this._frontendAutomationCount(this._entityRegistry),
				helpers: await this._frontendHelperCount(Array.isArray(configEntries) ? configEntries : [], this._entityRegistry),
				unavailable: Object.values(this._hass?.states || {}).filter((state) => state.state === "unavailable").length,
			};
		} catch (error) {
			console.error("[ha-server-health-card][frontend-counts] Unable to load frontend counts", error);
		} finally {
			this._registryLoading = false;
			this._registryLoadedFor = source;
			this._registryLoadedAt = Date.now();
			this._registrySourceSignature = `${Object.keys(this._hass?.entities || {}).length}|${Object.keys(this._hass?.devices || {}).length}`;
		}
		this._refreshDynamicContent(["home-assistant", "storage", "updates"]);
	}

	_systemContainerDefinitions() {
		return [["core","Home Assistant Core","mdi:home-assistant"],["supervisor","Supervisor","mdi:shield-home"],["audio","Audio","mdi:volume-high"],["cli","CLI","mdi:console"],["dns","DNS","mdi:dns"],["multicast","Multicast","mdi:access-point-network"],["observer","Observer","mdi:eye-outline"]];
	}
	async _supervisorGet(endpoint) { return this._hass.callWS({ type:"supervisor/api", endpoint, method:"get" }); }

	_startContainersAppsRefresh() {
		if (!this.isConnected || !this._hass || !this._config) return;
		if (this._containersAppsRefreshTimer) clearInterval(this._containersAppsRefreshTimer);
		this._loadContainersApps();
		this._containersAppsRefreshTimer = setInterval(() => this._loadContainersApps(), 60000);
	}

	async _loadContainersApps() {
		if (this._containersAppsLoadPromise) return this._containersAppsLoadPromise;
		this._containersAppsLoadPromise = (async () => {
			if (!this._hass?.callWS || this._hass?.user?.is_admin !== true || this._config?.show_containers_apps === false) {
				const hadData = this._containersApps.systems.length || this._containersApps.apps.length;
				this._containersApps = { infoLoading:false, statsLoading:false, infoLoadedAt:0, statsLoadedAt:0, systems:[], apps:[] };
				if (hadData) this._refreshDynamicContent(["containers-apps"]);
				return;
			}
			const startedAt = Date.now();
			const loadInfo = startedAt - this._containersApps.infoLoadedAt >= 300000;
			const loadStats = startedAt - this._containersApps.statsLoadedAt >= 60000;
			if (!loadInfo && !loadStats) return;
			const previousData = JSON.stringify([this._containersApps.systems, this._containersApps.apps]);
			let systems = this._containersApps.systems;
			let apps = this._containersApps.apps;
			this._containersApps = { ...this._containersApps, infoLoading:loadInfo, statsLoading:loadStats };
			const defs = this._systemContainerDefinitions();
			const systemStatsPromise = loadStats
				? Promise.allSettled(defs.map(([id]) => this._supervisorGet(`/${id}/stats`)))
				: Promise.resolve([]);
			const infoPromise = loadInfo
				? Promise.all([
					Promise.allSettled(defs.map(async ([id,name,icon]) => ({ id, name, icon, info:await this._supervisorGet(`/${id}/info`) }))),
					this._supervisorGet("/addons").catch(() => null),
				])
				: Promise.resolve([null, null]);
			const [systemStats, [systemInfo, addons]] = await Promise.all([systemStatsPromise, infoPromise]);
			if (loadInfo) {
				const previousSystems = new Map(systems.map(item => [item.id, item]));
				systems = systemInfo.filter(result => result.status === "fulfilled").map(result => ({ ...result.value, stats:previousSystems.get(result.value.id)?.stats || null }));
				const raw = addons?.data?.addons ?? addons?.addons ?? [];
				const previousApps = new Map(apps.map(item => [item.slug, item]));
				apps = Array.isArray(raw) ? raw.map(app => ({ ...app, stats:previousApps.get(app.slug)?.stats || null })) : [];
			}
			if (loadStats) {
				const statsById = new Map(defs.map(([id], index) => [id, systemStats[index]]));
				systems = systems.map(item => {
					const result = statsById.get(item.id);
					return { ...item, stats:result?.status === "fulfilled" ? result.value : item.stats };
				});
				const appStats = await Promise.allSettled(apps.map(item => item.state === "started" ? this._supervisorGet(`/addons/${item.slug}/stats`) : Promise.resolve(null)));
				apps = apps.map((item, index) => ({ ...item, stats:item.state === "started" && appStats[index]?.status === "fulfilled" ? appStats[index].value : null }));
			}
			const completedAt = Date.now();
			this._containersApps = {
				infoLoading:false,
				statsLoading:false,
				infoLoadedAt:loadInfo && (systems.length || apps.length) ? completedAt : this._containersApps.infoLoadedAt,
				statsLoadedAt:loadStats && (systems.length || apps.length) ? completedAt : this._containersApps.statsLoadedAt,
				systems,
				apps,
			};
			if (previousData !== JSON.stringify([systems, apps])) this._refreshDynamicContent(["containers-apps"]);
		})().catch(error => {
			console.debug("[ha-server-health-card][containers-apps] Unable to load containers and Apps", error);
			this._containersApps = { ...this._containersApps, infoLoading:false, statsLoading:false };
		}).finally(() => {
			this._containersAppsLoadPromise = null;
		});
		return this._containersAppsLoadPromise;
	}

	_containerStatsText(stats) { if(!stats)return this._t("common.notAvailable"); const cpu=Number.isFinite(Number(stats.cpu_percent))?`${new Intl.NumberFormat(this._language(),{maximumFractionDigits:2}).format(Number(stats.cpu_percent))}%`:"--"; const ram=Number.isFinite(Number(stats.memory_percent))?`${new Intl.NumberFormat(this._language(),{maximumFractionDigits:1}).format(Number(stats.memory_percent))}%`:"--"; const mem=Number.isFinite(Number(stats.memory_usage))?this._formatBytes(Number(stats.memory_usage)):"--"; return `${this._t("labels.cpuShort")} ${cpu} · ${this._t("labels.ramShort")} ${ram} · ${mem}`; }

	_renderContainerRow(item, app=false) {
		const info = app ? item : item.info || {};
		const running = app ? item.state === "started" : Boolean(item.stats);
		const status = running ? this._t("labels.running") : app ? this._t("labels.stopped") : this._t("common.notAvailable");
		const statusIcon = running ? "mdi:play" : "mdi:stop";
		const version = info.version || "--";
		const subtitle = app ? `${item.slug} · ${version}` : `hassio_${item.id} · ${version}`;
		return `<div class="container-row ${running ? "running" : "stopped"}"><div class="container-icon"><ha-icon icon="${app ? "mdi:docker" : item.icon}"></ha-icon></div><div class="container-main"><strong>${this._escape(item.name)}</strong><small>${this._escape(subtitle)}</small></div><small class="container-status"><ha-icon icon="${statusIcon}"></ha-icon>${this._escape(status)}</small><div class="container-stats"><strong>${this._escape(this._containerStatsText(item.stats))}</strong></div></div>`;
	}

	_renderContainersApps() {
		if (this._hass?.user?.is_admin !== true) return "";
		const systems = this._containersApps.systems || [];
		const apps = this._containersApps.apps || [];
		const runningSystems = systems.filter((item) => item.stats).length;
		const runningApps = apps.filter((item) => item.state === "started").length;
		const total = systems.length + apps.length;
		const running = runningSystems + runningApps;
		const count = this._t("labels.runningCount").replace("{running}", running).replace("{total}", total);
		const group = (key, title, rows, active) => {
			const collapsed = this._containerGroupsCollapsed.has(key);
			return `<div class="containers-group ${collapsed ? "collapsed" : ""}" data-container-group="${key}"><button type="button" class="containers-group-head" data-toggle-container-group="${key}" aria-expanded="${String(!collapsed)}"><strong>${this._escape(title)}</strong><span>${active}/${rows.length}</span><ha-icon icon="mdi:chevron-${collapsed ? "down" : "up"}"></ha-icon></button><div class="container-list">${rows.map((row) => row.html).join("")}</div></div>`;
		};
		const systemRows = systems.map((item) => ({ html: this._renderContainerRow(item, false) }));
		const appRows = apps.map((item) => ({ html: this._renderContainerRow(item, true) }));
		return this._renderSection("containers-apps", "mdi:docker", this._t("sections.containersApps"), `<div class="containers-apps">${group("systems", this._t("labels.containers"), systemRows, runningSystems)}${group("apps", this._t("labels.containerApps"), appRows, runningApps)}</div>`, `<span class="containers-summary">${this._escape(count)}</span>`);
	}

	async _loadRecorderInfo() {
		if (!this._hass?.callWS || this._recorderInfo.loading) return;
		if (this._recorderInfo.loadedAt && Date.now() - this._recorderInfo.loadedAt < 300000) return;
		this._recorderInfo = { ...this._recorderInfo, loading: true };
		try {
			const data = await this._hass.callWS({ type: "recorder/info" });
			this._recorderInfo = { loading: false, loadedAt: Date.now(), data };
		} catch (error) {
			console.debug("[ha-server-health-card][recorder] Unable to load Recorder information", error);
			this._recorderInfo = { loading: false, loadedAt: Date.now(), data: null };
		}
		this._refreshDynamicContent(["database"]);
		this._refreshHero();
	}

	async _loadDatabaseHistory7d() {
		const entityId = this._entities.database;
		if (!this._hass?.callApi || !this._isValidEntityId(entityId) || this._databaseHistory7d.loading) return;
		const key = entityId;
		if (this._databaseHistory7d.key === key && Date.now() - this._databaseHistory7d.loadedAt < 3600000) return;
		this._databaseHistory7d = { key, loading: true, loadedAt: 0, points: [] };
		try {
			const end = new Date();
			const start = new Date(end.getTime() - 7 * 24 * 3600000);
			const query = new URLSearchParams({ filter_entity_id: entityId, end_time: end.toISOString(), significant_changes_only: "0" });
			const history = await this._hass.callApi("GET", `history/period/${start.toISOString()}?${query.toString()}`);
			const points = this._normalizeMetricHistory(history, entityId);
			this._databaseHistory7d = { key, loading: false, loadedAt: Date.now(), points };
		} catch (error) {
			console.debug("[ha-server-health-card][database] Unable to load 7-day database history", error);
			this._databaseHistory7d = { key, loading: false, loadedAt: Date.now(), points: [] };
		}
		this._refreshDynamicContent(["database"]);
	}

	_databaseGrowth7d() {
		const state = this._state(this._entities.database);
		const currentBytes = this._dataSizeToBytes(state);
		const first = this._databaseHistory7d.points?.[0];
		if (!state || !Number.isFinite(currentBytes) || !first) return null;
		const firstBytes = this._dataSizeToBytes({ state: String(first.value), attributes: { unit_of_measurement: first.unit || state.attributes?.unit_of_measurement || "B" } });
		if (!Number.isFinite(firstBytes)) return null;
		const deltaBytes = currentBytes - firstBytes;
		const percent = firstBytes !== 0 ? deltaBytes / firstBytes * 100 : null;
		return { deltaBytes, percent };
	}

	_formatDatabaseGrowth7d() {
		const growth = this._databaseGrowth7d();
		if (!growth || !Number.isFinite(growth.deltaBytes)) return this._t("common.notAvailable");
		const sign = growth.deltaBytes > 0 ? "+" : growth.deltaBytes < 0 ? "−" : "±";
		const percent = Number.isFinite(growth.percent) ? `${sign}${new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(Math.abs(growth.percent))}%` : "";
		return `${sign}${this._formatBytes(Math.abs(growth.deltaBytes))}${percent ? ` · ${percent}` : ""}`;
	}

	async _loadBackupManager() {
		if (!this._hass?.callWS || this._backupManager.loading) return;
		if (this._hass?.user?.is_admin !== true) {
			if (this._backupManager.backups.length || this._backupManager.agents.length || this._backupManager.error) {
				this._backupManager = { loading: false, loadedAt: 0, backups: [], agents: [], error: null };
				this._refreshDynamicContent(["backups"]);
				this._refreshHero();
			}
			return;
		}
		if (this._backupManager.loadedAt && Date.now() - this._backupManager.loadedAt < 300000) return;
		this._backupManager = { ...this._backupManager, loading: true };
		try {
			const [info, agentInfo] = await Promise.all([
				this._hass.callWS({ type: "backup/info" }),
				this._hass.callWS({ type: "backup/agents/info" }),
			]);
			this._backupManager = {
				loading: false,
				loadedAt: Date.now(),
				backups: Array.isArray(info?.backups) ? info.backups : [],
				agents: Array.isArray(agentInfo?.agents) ? agentInfo.agents : [],
				error: null,
			};
		} catch (error) {
			console.debug("[ha-server-health-card][backups] Unable to load backup locations", error);
			this._backupManager = { ...this._backupManager, loading: false, loadedAt: Date.now(), error };
		}
		this._refreshDynamicContent(["backups"]);
		this._refreshHero();
	}

	_backupAgentStats() {
		const backups = this._backupManager.backups || [];
		const knownAgents = new Map((this._backupManager.agents || []).map((agent) => [agent.agent_id, agent.name || agent.agent_id]));
		const stats = new Map();
		for (const backup of backups) {
			const failedIds = new Set(backup?.failed_agent_ids || []);
			for (const [agentId, details] of Object.entries(backup?.agents || {})) {
				const current = stats.get(agentId) || { id: agentId, name: knownAgents.get(agentId) || agentId, count: 0, latest: null, size: null, protected: false, failed: false };
				current.count += 1;
				const timestamp = Date.parse(backup?.date);
				if (!current.latest || (Number.isFinite(timestamp) && timestamp > current.latest.timestamp)) {
					current.latest = { date: backup.date, timestamp: Number.isFinite(timestamp) ? timestamp : 0 };
					current.size = Number.isFinite(Number(details?.size)) ? Number(details.size) : null;
					current.protected = details?.protected === true;
					current.failed = failedIds.has(agentId);
				}
				stats.set(agentId, current);
			}
			for (const agentId of failedIds) {
				const current = stats.get(agentId) || { id: agentId, name: knownAgents.get(agentId) || agentId, count: 0, latest: null, size: null, protected: false, failed: true };
				current.failed = true;
				stats.set(agentId, current);
			}
		}
		return [...stats.values()].sort((left, right) => left.name.localeCompare(right.name));
	}

	_latestFailedBackupAgents() {
		const backups = [...(this._backupManager.backups || [])].sort((left, right) => Date.parse(right?.date || 0) - Date.parse(left?.date || 0));
		const latest = backups[0];
		if (!latest) return [];
		const names = new Map((this._backupManager.agents || []).map((agent) => [agent.agent_id, agent.name || agent.agent_id]));
		return (latest.failed_agent_ids || []).map((id) => names.get(id) || id);
	}

	_backupHealth() {
		const raw = String(this._stateValue(this._entities.backupStatus, "") || "").trim().toLowerCase();
		if (!raw) return { failed: false, known: false, label: this._t("common.notAvailable") };
		const failed = /error|failed|failure|fail|erreur|échec|echec/.test(raw);
		const successful = /idle|ready|success|successful|completed|complete|ok|none/.test(raw);
		return { failed, known: failed || successful, label: failed ? this._t("labels.backupFailed") : successful ? this._t("labels.backupOk") : raw };
	}

	_healthConfigNumber(key, fallback, minimum = 0, maximum = 100) {
		const value = Number(this._config?.[key]);
		if (!Number.isFinite(value)) return fallback;
		return Math.min(maximum, Math.max(minimum, value));
	}

	_healthThresholds() {
		return {
			cpu: { warning: this._healthConfigNumber("health_cpu_warning", 90), critical: this._healthConfigNumber("health_cpu_critical", 98) },
			memory: { warning: this._healthConfigNumber("health_memory_warning", 90), critical: this._healthConfigNumber("health_memory_critical", 98) },
			disk: { warning: this._healthConfigNumber("health_disk_warning", 85), critical: this._healthConfigNumber("health_disk_critical", 95) },
			database: { warning: this._healthConfigNumber("health_database_warning", 1500, 0, 1000000), critical: this._healthConfigNumber("health_database_critical", 3000, 0, 1000000) },
			backupSize: { warning: this._healthConfigNumber("health_backup_size_warning", 1500, 0, 1000000), critical: this._healthConfigNumber("health_backup_size_critical", 3000, 0, 1000000) },
			databaseVariation: { warning: this._healthConfigNumber("health_database_variation_warning", 25, 0, 10000), critical: this._healthConfigNumber("health_database_variation_critical", 50, 0, 10000) },
			backupVariation: { warning: this._healthConfigNumber("health_backup_variation_warning", 25, 0, 10000), critical: this._healthConfigNumber("health_backup_variation_critical", 50, 0, 10000) },
			unavailableRatio: { warning: this._healthConfigNumber("health_unavailable_warning", 5) / 100, critical: this._healthConfigNumber("health_unavailable_critical", 15) / 100 },
			updates: { warning: this._healthConfigNumber("health_updates_warning", 10, 0, 10000), critical: this._healthConfigNumber("health_updates_critical", 20, 0, 10000) },
		};
	}

	_healthLevelFor(metric, value) {
		if (this._config?.health_analysis_enabled === false) return "";
		if (!Number.isFinite(value)) return "";
		const threshold = this._healthThresholds()[metric];
		if (!threshold) return "";
		if (Number.isFinite(threshold.critical) && value >= threshold.critical) return "critical";
		if (Number.isFinite(threshold.warning)) {
			const reached = threshold.operator === "greaterThan"
				? value > threshold.warning
				: value >= threshold.warning;
			if (reached) return "warning";
		}
		return "";
	}

	_metricHealthLevel(key, value = null) {
		const resolvedValue = key === "database"
			? this._dataSizeMegabytes(this._entities.database)
			: key === "backupSize"
				? this._dataSizeMegabytes(this._entities.lastBackupSize)
				: value ?? this._numericState(this._entities[key]);
		return this._healthLevelFor(key, resolvedValue);
	}

	_healthIssues() {
		if (this._config?.health_analysis_enabled === false) return [];
		const issues = [];
		const metrics = [
			["cpu", this._t("labels.cpu")],
			["memory", this._t("labels.memory")],
			["disk", this._t("labels.disk")],
		];
		for (const [metric, label] of metrics) {
			const value = this._numericState(this._entities[metric], 0);
			const level = this._healthLevelFor(metric, value);
			if (!level) continue;
			issues.push({ metric, section: "system", level, label, value: `${new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(value)}%` });
		}
		const sizeMetrics = [
			["database", this._entities.database, this._t("labels.database"), "system"],
			["backupSize", this._entities.lastBackupSize, this._t("labels.backupSizeHealth"), "backups"],
		];
		for (const [metric, entityId, label, section] of sizeMetrics) {
			const value = this._dataSizeMegabytes(entityId);
			const level = this._healthLevelFor(metric, value);
			if (!level) continue;
			issues.push({ metric, section, level, label, value: this._formatEntity(entityId, { decimals: 1 }) });
		}
		const databaseVariation = this._metricVariation24h(this._entities.database);
		const databaseVariationPercent = Number.isFinite(databaseVariation?.percent) ? Math.abs(databaseVariation.percent) : null;
		const databaseVariationLevel = this._healthLevelFor("databaseVariation", databaseVariationPercent);
		if (databaseVariationLevel) {
			const sign = databaseVariation.percent > 0 ? "+" : databaseVariation.percent < 0 ? "−" : "±";
			const percent = new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(Math.abs(databaseVariation.percent));
			issues.push({ metric: "databaseVariation", section: "system", level: databaseVariationLevel, label: this._t("labels.databaseVariationHealth"), value: `${sign}${percent}%` });
		}
		const backupVariationPercent = Number.isFinite(this._backupSizeHistory.percent) ? Math.abs(this._backupSizeHistory.percent) : null;
		const backupVariationLevel = this._healthLevelFor("backupVariation", backupVariationPercent);
		if (backupVariationLevel) {
			const sign = this._backupSizeHistory.percent > 0 ? "+" : this._backupSizeHistory.percent < 0 ? "−" : "±";
			const percent = new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(Math.abs(this._backupSizeHistory.percent));
			issues.push({ metric: "backupVariation", section: "backups", level: backupVariationLevel, label: this._t("labels.backupVariationHealth"), value: `${sign}${percent}%` });
		}

		const counts = this._instanceCounts();
		if (Number.isFinite(counts.unavailable) && Number.isFinite(counts.entities) && counts.entities > 0) {
			const unavailableRatio = counts.unavailable / counts.entities;
			const unavailableLevel = this._healthLevelFor("unavailableRatio", unavailableRatio);
			if (unavailableLevel) {
				issues.push({
					metric: "unavailable",
					section: "home-assistant",
					level: unavailableLevel,
					label: this._t("labels.unavailableRatio"),
					value: `${new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(unavailableRatio * 100)}% (${counts.unavailable}/${counts.entities})`,
				});
			}
		}

		const updates = this._availableUpdates().length;
		const updatesLevel = this._healthLevelFor("updates", updates);
		if (updatesLevel) {
			issues.push({
				metric: "updates",
				section: "updates",
				level: updatesLevel,
				label: this._t("labels.availableUpdates"),
				value: String(updates),
			});
		}

		const platformUpdates = [
			["haCoreUpdate", this._entities.haCoreUpdate, this._t("labels.haCoreUpdateAvailable"), this._config?.health_check_core_update !== false],
			["haOsUpdate", this._entities.haOsUpdate, this._t("labels.haOsUpdateAvailable"), this._config?.health_check_os_update !== false],
		];
		for (const [metric, entityId, label, enabled] of platformUpdates) {
			if (!enabled) continue;
			const state = this._state(entityId);
			if (state?.state !== "on") continue;
			issues.push({
				metric,
				section: "home-assistant",
				level: "warning",
				label,
				value: String(state.attributes?.latest_version || this._t("labels.updateAvailable")),
			});
		}

		const failedBackupAgents = this._latestFailedBackupAgents();
		const backup = this._backupHealth();
		if (this._config?.health_check_backup !== false && failedBackupAgents.length) {
			for (const name of failedBackupAgents) issues.push({ metric: `backup:${name}`, section: "backups", level: "warning", label: name, value: this._t("labels.backupFailed") });
		} else if (this._config?.health_check_backup !== false && backup.failed) {
			issues.push({ metric: "backup", section: "backups", level: "warning", label: this._t("labels.backupStatus"), value: this._t("labels.backupFailed") });
		}
		return issues;
	}

	_health() {
		const issues = this._healthIssues();
		const level = issues.some((issue) => issue.level === "critical")
			? "critical"
			: issues.length
				? "warning"
				: "healthy";
		return {
			level,
			label: this._t(`card.${level}`),
			issues,
		};
	}

	_healthDetailsMarkup(health = this._health()) {
		if (!health.issues.length) return "";
		return `<div class="health-details ${health.level}" data-health-details${this._healthDetailsOpen ? "" : " hidden"}><div class="health-details-title">${this._t("card.healthDetails")}</div>${health.issues.map((issue) => `<div class="health-issue ${issue.level}"><i></i><span>${this._escape(issue.label)}</span><strong>${this._escape(issue.value)}</strong></div>`).join("")}</div>`;
	}

	_updateMiniGraphElement(element) {
		const entityId = element.dataset.metricEntity;
		let options = {};
		try { options = JSON.parse(element.dataset.metricOptions || "{}"); } catch (_error) {}
		const markup = this._miniGraphTile("mdi:blank", "", entityId, options);
		const template = document.createElement("template");
		template.innerHTML = markup;
		const fresh = template.content.firstElementChild;
		if (!fresh) return;
		for (const level of ["warning", "critical"]) element.classList.toggle(level, fresh.classList.contains(level));
		const value = element.querySelector('[data-role="metric-value"]');
		const freshValue = fresh.querySelector('[data-role="metric-value"]');
		if (value && freshValue && value.textContent !== freshValue.textContent) value.textContent = freshValue.textContent;
		const currentVariation = element.querySelector(".metric-variation");
		const freshVariation = fresh.querySelector(".metric-variation");
		if (freshVariation && !currentVariation) {
			value?.insertAdjacentElement("afterend", freshVariation.cloneNode(true));
		} else if (!freshVariation && currentVariation) {
			currentVariation.remove();
		} else if (freshVariation && currentVariation) {
			if (currentVariation.textContent !== freshVariation.textContent) currentVariation.textContent = freshVariation.textContent;
			const title = freshVariation.getAttribute("title");
			if (title) currentVariation.setAttribute("title", title); else currentVariation.removeAttribute("title");
		}
		for (const selector of [".mini-line", ".mini-area"]) {
			const currentPath = element.querySelector(selector);
			const freshPath = fresh.querySelector(selector);
			if (currentPath && freshPath) currentPath.setAttribute("d", freshPath.getAttribute("d") || "");
		}
	}
	_updateSystemInfoValues() {
		const values = new Map([
			[this._entities.ipv4, this._formatEntity(this._entities.ipv4, { raw: true })],
			[this._entities.uptime, this._formatUptime(this._entities.uptime)],
		]);
		this.shadowRoot.querySelectorAll("[data-info-entity]").forEach((element) => {
			const next = values.get(element.dataset.infoEntity);
			const target = element.querySelector('[data-role="info-value"]');
			if (target && next != null && target.textContent !== String(next)) target.textContent = String(next);
		});
	}
	_updateLiveMetrics() {
		this.shadowRoot.querySelectorAll(".mini-graph[data-metric-entity]").forEach((element) => this._updateMiniGraphElement(element));
		this._updateSystemInfoValues();
		this._refreshSectionSummaries();
	}

	_stateSignature(entityId) {
		const state = this._state(entityId);
		if (!state) return null;
		return [state.state, state.last_updated, state.attributes?.installed_version, state.attributes?.latest_version, state.attributes?.entity_picture, state.attributes?.icon];
	}

	_sectionSignature(id) {
		const e = this._entities;
		if (id === "home-assistant") return JSON.stringify([this._registryCounts, this._stateSignature(e.haCoreUpdate), this._stateSignature(e.supervisorUpdate), this._stateSignature(e.haOsUpdate), this._stateSignature(e.backupStatus)]);
		if (id === "system") return JSON.stringify([this._stateSignature(e.cpu), this._stateSignature(e.memory), this._stateSignature(e.disk), this._stateSignature(e.database), this._stateSignature(e.ipv4), this._stateSignature(e.uptime), this._metricHistory.loadedAt]);
		if (id === "network") return JSON.stringify([
			...this._systemMonitorNetworks().flatMap(([, values]) => [this._stateSignature(values.networkIn), this._stateSignature(values.networkOut)]),
			this._metricHistory.loadedAt,
		]);
		if (id === "database") return JSON.stringify([this._stateSignature(e.database), this._databaseHistory7d.loadedAt, this._recorderInfo.loadedAt]);
		if (id === "containers-apps") return JSON.stringify([this._containersApps.infoLoadedAt, this._containersApps.statsLoadedAt]);
		if (id === "storage") return JSON.stringify(Object.values(this._hass?.states || {}).filter((state) => /disk|swap/.test(state.entity_id)).map((state) => [state.entity_id, state.state, state.last_updated]));
		if (id === "updates") return JSON.stringify(this._availableUpdates().map((state) => this._stateSignature(state.entity_id)));
		if (id === "backups") return JSON.stringify([this._stateSignature(e.backupStatus), this._stateSignature(e.lastBackupSize), this._stateSignature(e.lastBackup), this._stateSignature(e.nextBackup), this._localePreferencesSignature(), this._backupManager.loadedAt]);
		return "";
	}

	_captureSectionSignatures() {
		["home-assistant", "system", "network", "storage", "database", "containers-apps", "updates", "backups"].forEach((id) => this._sectionSignatures.set(id, this._sectionSignature(id)));
	}

	_sectionMarkup(id) {
		const counts = this._instanceCounts();
		if (id === "home-assistant") return this._renderHomeAssistant(counts);
		if (id === "system") return this._renderSystem();
		if (id === "network") return this._renderNetwork();
		if (id === "storage") return this._renderStorage();
		if (id === "database") return this._renderDatabase();
		if (id === "containers-apps") return this._renderContainersApps();
		if (id === "updates") return this._renderUpdates(this._availableUpdates());
		if (id === "backups") return this._renderBackups();
		return "";
	}

	_refreshSection(id) {
		const section = this.shadowRoot.querySelector(`[data-section-id="${id}"]`);
		if (!section) return;
		const template = document.createElement("template");
		template.innerHTML = this._sectionMarkup(id).trim();
		const fresh = template.content.querySelector(".section");
		if (!fresh) return;
		const currentBody = section.querySelector(".section-body");
		const freshBody = fresh.querySelector(".section-body");
		if (currentBody && freshBody) currentBody.replaceChildren(...freshBody.childNodes);
		const currentSide = section.querySelector(".section-side");
		const freshSide = fresh.querySelector(".section-side");
		if (currentSide && freshSide) currentSide.replaceChildren(...freshSide.childNodes);
		this._bindMoreInfo(section);
		this._bindNavigation(section);
		this._bindBackupDetails(section);
		this._bindContainerGroups(section);
	}

	_refreshHero() {
		const health = this._health();
		const pill = this.shadowRoot.querySelector(".health-status");
		const shouldShow = this._healthStatusVisible(health);
		if (Boolean(pill) !== shouldShow) { this._render(); return; }
		if (!pill) return;
		pill.className = `health-status ${health.level}`;
		pill.innerHTML = `<span class="health-status-main"><i></i><strong>${health.label}</strong></span><span class="health-status-count">${health.issues.length ? `${health.issues.length} ${this._t("labels.issues")}` : this._t("card.noIssues")}</span>${health.issues.length ? `<ha-icon icon="mdi:chevron-${this._healthDetailsOpen ? "up" : "down"}"></ha-icon>` : ""}`;
		const current = this.shadowRoot.querySelector("[data-health-details]");
		const template = document.createElement("template");
		template.innerHTML = this._healthDetailsMarkup(health);
		const fresh = template.content.firstElementChild;
		if (current && fresh) {
			current.replaceWith(fresh);
		} else if (current && !fresh) {
			current.remove();
		} else if (!current && fresh) {
			pill.insertAdjacentElement("afterend", fresh);
		}
		pill.setAttribute("aria-expanded", String(Boolean(fresh && this._healthDetailsOpen)));
	}

	_refreshDynamicContent(forceIds = null) {
		if (!this.shadowRoot.querySelector("ha-card")) return;
		this._updateLiveMetrics();
		const ids = forceIds || ["home-assistant", "storage", "updates", "backups"];
		for (const id of ids) {
			if (id === "system" || id === "network") continue;
			const signature = this._sectionSignature(id);
			if (!forceIds && signature === this._sectionSignatures.get(id)) continue;
			this._sectionSignatures.set(id, signature);
			this._refreshSection(id);
		}
		this._refreshHero();
	}

	_summaryItem(label, value, level = "") {
		return `<span class="section-summary-item ${level}"><b>${this._escape(label)}</b> ${this._escape(value)}</span>`;
	}

	_formatNetworkRate(entityId) {
		const state = this._state(entityId);
		const raw = this._numericState(entityId);
		if (!Number.isFinite(raw)) return this._t("common.notAvailable");
		const unit = String(state?.attributes?.unit_of_measurement || "").toLowerCase().replace(/\s/g, "");
		let value = raw;
		if (["mb/s", "mbyte/s", "mbps"].includes(unit)) value *= 1000;
		else if (["b/s", "byte/s"].includes(unit)) value /= 1000;
		else if (["bit/s", "bps"].includes(unit)) value /= 8000;
		else if (["kbit/s", "kbps"].includes(unit)) value /= 8;
		else if (unit === "mbit/s") value *= 125;
		return `${new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(value)} KB/s`;
	}

	_sectionSummary(id) {
		if (id === "home-assistant") {
			const coreState = this._state(this._entities.haCoreUpdate);
			const osState = this._state(this._entities.haOsUpdate);
			const core = coreState?.attributes?.installed_version || "--";
			const os = osState?.attributes?.installed_version || "--";
			return `<span class="section-summary" data-section-summary="${id}">${this._summaryItem("Core", core, coreState?.state === "on" ? "warning" : "")}${this._summaryItem("OS", os, osState?.state === "on" ? "warning" : "")}</span>`;
		}
		if (id === "system") {
			return `<span class="section-summary" data-section-summary="${id}">${[["CPU", "cpu"], [this._t("labels.memory"), "memory"], [this._t("labels.disk"), "disk"]].map(([label, key]) => {
				const value = this._numericState(this._entities[key]);
				return this._summaryItem(label, Number.isFinite(value) ? `${Math.round(value)}%` : this._t("common.notAvailable"), this._metricHealthLevel(key, value));
			}).join("")}</span>`;
		}
		if (id === "network") {
			const interfaces = this._systemMonitorNetworks();
			const items = interfaces.length ? interfaces.map(([name, values]) => {
				const download = this._formatNetworkRate(values.networkIn);
				const upload = this._formatNetworkRate(values.networkOut);
				return `<span class="network-summary-interface"><b>${this._escape(name)}:</b><span class="network-summary-download"><i>↓</i><strong>${this._escape(download)}</strong></span><span class="network-summary-upload"><i>↑</i><strong>${this._escape(upload)}</strong></span></span>`;
			}).join("") : `${this._summaryItem("↓", this._formatNetworkRate(this._entities.networkIn))}${this._summaryItem("↑", this._formatNetworkRate(this._entities.networkOut))}`;
			return `<span class="section-summary network-section-summary" data-section-summary="${id}">${items}</span>`;
		}
		if (id === "database") {
			const bytes = this._dataSizeToBytes(this._state(this._entities.database));
			const size = Number.isFinite(bytes) ? this._formatBytes(bytes) : this._t("common.notAvailable");
			const growth = this._databaseGrowth7d();
			const growthPercent = growth && Number.isFinite(growth.percent)
				? `${growth.percent > 0 ? "+" : growth.percent < 0 ? "−" : "±"}${new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(Math.abs(growth.percent))}%`
				: this._t("common.notAvailable");
			const sizeLevel = this._metricHealthLevel("database");
			return `<span class="section-summary database-section-summary" data-section-summary="${id}">${this._summaryItem("Size", size, sizeLevel)}${this._summaryItem("Growth", growthPercent)}</span>`;
		}
		if (id === "storage") {
			return `<span class="section-summary" data-section-summary="${id}">${Object.entries(this._systemMonitorDisks()).slice(0, 3).map(([mount, disk]) => {
				const percent = this._diskUsage(disk).percent;
				const level = this._healthLevelFor("disk", percent);
				return this._summaryItem(mount, Number.isFinite(percent) ? `${Math.round(percent)}%` : this._t("common.notAvailable"), level);
			}).join("")}</span>`;
		}
		if (id === "backups") {
			const backup = this._backupHealth();
			const backupSizeBytes = this._dataSizeToBytes(this._state(this._entities.lastBackupSize));
			const size = Number.isFinite(backupSizeBytes) ? this._formatBytes(backupSizeBytes) : this._t("common.notAvailable");
			const statusClass = backup.failed ? "failed" : backup.known ? "ok" : "unknown";
			const statusLabel = backup.failed ? this._t("labels.backupFailed") : backup.known ? this._t("labels.backupOk") : this._t("common.unknown");
			const sizeLevel = this._metricHealthLevel("backupSize");
			return `<span class="section-summary backup-section-summary" data-section-summary="${id}"><span class="backup-summary-size ${sizeLevel}">${this._escape(size)}</span><span class="backup-result-pill ${statusClass}">${statusLabel}</span></span>`;
		}
		return "";
	}

	_refreshSectionSummaries() {
		for (const id of ["home-assistant", "system", "network", "storage", "database", "backups"]) {
			const current = this.shadowRoot.querySelector(`[data-section-summary="${id}"]`);
			if (!current) continue;
			const template = document.createElement("template"); template.innerHTML = this._sectionSummary(id);
			const fresh = template.content.firstElementChild;
			if (fresh && current.innerHTML !== fresh.innerHTML) current.replaceChildren(...fresh.childNodes);
		}
	}

	_healthStatusVisible(health = this._health()) {
		if (this._config?.health_analysis_enabled === false) return false;
		const mode = ["always", "problems", "never"].includes(this._config?.health_status_display) ? this._config.health_status_display : "always";
		if (mode === "never") return false;
		if (mode === "problems") return health.issues.length > 0;
		return true;
	}

	_render() {
		if (!this.shadowRoot || !this._config) {
			return;
		}
		if (!this._hass) {
			this.shadowRoot.innerHTML = `<ha-card><div class="loading">Loading…</div></ha-card>`;
			return;
		}
		const health = this._health();
		const updates = this._availableUpdates();
		const counts = this._instanceCounts();
		const title = this._config.title || this._t("card.title");
		const subtitle = this._config.subtitle || this._t("card.subtitle");
		const showHealthStatus = this._healthStatusVisible(health);
		this.shadowRoot.innerHTML = `
			<style>${this._styles()}</style>
			<ha-card>
				<div class="shell ${this._config.show_icon === false && this._config.show_header === false && !showHealthStatus ? "no-header-content" : ""}">
					<header class="hero ${this._config.show_header === false ? "header-compact" : ""} ${this._config.show_icon === false && this._config.show_header === false ? "pill-only" : ""}">
						<div class="hero-row ${this._config.show_icon === false ? "without-icon" : ""}">
							${this._config.show_icon === false ? "" : `<div class="hero-icon"><ha-icon icon="mdi:home-assistant"></ha-icon></div>`}
							${this._config.show_header === false ? "" : `<div class="hero-copy"><h2>${this._escape(title)}</h2><span>${this._escape(subtitle)}</span></div>`}
						</div>
					</header>
					${!showHealthStatus ? "" : `<button type="button" class="health-status ${health.level}" data-toggle-health aria-expanded="${String(this._healthDetailsOpen && health.issues.length > 0)}"><span class="health-status-main"><i></i><strong>${health.label}</strong></span><span class="health-status-count">${health.issues.length ? `${health.issues.length} ${this._t("labels.issues")}` : this._t("card.noIssues")}</span>${health.issues.length ? `<ha-icon icon="mdi:chevron-${this._healthDetailsOpen ? "up" : "down"}"></ha-icon>` : ""}</button>`}
					${!showHealthStatus ? "" : this._healthDetailsMarkup(health)}
					${this._renderConfiguredSections(counts, updates)}
				</div>
			</ha-card>
		`;
		this._bindEvents();
		this._captureSectionSignatures();
	}

	_renderSection(id, icon, title, content, badge = "") {
		const collapsed = this._collapsed.has(id);
		return `
			<section class="section ${collapsed ? "collapsed" : ""}" data-section-id="${id}">
				<button type="button" class="section-head" data-toggle-section="${id}" aria-expanded="${!collapsed}">
					<span class="section-title"><ha-icon icon="${icon}"></ha-icon>${title}</span>
					<span class="section-side">${badge}<ha-icon icon="mdi:chevron-${collapsed ? "down" : "up"}"></ha-icon></span>
				</button>
				<div class="section-body">${content}</div>
			</section>
		`;
	}

	_systemMonitorNetworks() {
		const networks = this._discoverEntitiesFromRegistry().networks || {};
		const virtualInterface = /^(lo|docker\d*|hassio|veth.*|br-.*|virbr\d*|dummy\d*)$/i;
		return Object.entries(networks)
			.filter(([name, values]) => !virtualInterface.test(name) && (values.networkIn || values.networkOut))
			.sort(([left], [right]) => left.localeCompare(right));
	}

	_networkInterface() {
		const discoveredInterface = this._discoverEntitiesFromRegistry().networkInterface;
		if (discoveredInterface) return discoveredInterface;
		const entityIds = [this._entities.networkIn, this._entities.networkOut, this._entities.ipv4].filter(Boolean);
		for (const entityId of entityIds) {
			const objectId = entityId.split(".")[1] || "";
			for (const pattern of [/network_throughput_(?:in|out)_(.+)$/i, /ipv4_address_(.+)$/i]) {
				const match = objectId.match(pattern);
				if (match?.[1]) return match[1];
			}
		}
		return "";
	}

	_renderHomeAssistant(counts = this._instanceCounts()) {
		const unavailableRatio = Number.isFinite(counts.unavailable) && Number.isFinite(counts.entities) && counts.entities > 0 ? counts.unavailable / counts.entities : 0;
		const configurationStats = [
			[counts.devices, this._t("labels.devices"), "", "/config/devices/dashboard"],
			[counts.automations, this._t("labels.automations"), "", "/config/automation/dashboard"],
			[counts.helpers, this._t("labels.helpers"), "", "/config/helpers"],
			[counts.apps, this._t("labels.apps"), "", "/config/apps/installed"],
			[counts.marketplace, this._t("labels.marketplace"), "", "/marketplace/browse?sort=type&group=status&status=installed"],
		].filter(([value]) => value != null);
		const entityStats = [
			[counts.entities, this._t("labels.total"), "", "/config/entities"],
			[counts.enabledEntities, this._t("labels.enabledEntities"), "", "/config/entities?status=enabled"],
			[counts.disabledEntities, this._t("labels.disabledEntities"), "", "/config/entities?status=disabled"],
			[counts.unavailable, this._t("labels.unavailableEntities"), this._healthLevelFor("unavailableRatio", unavailableRatio), "/config/entities?sort=device&group=visible&status=unavailable"],
		];
		const canNavigateConfiguration = this._hass?.user?.is_admin === true;
		const renderStats = (stats) => stats.map(([value, label, level, path]) => {
			const navigation = canNavigateConfiguration && path ? ` data-navigate="${this._escape(path)}"` : "";
			return `<button type="button" class="instance-stat ${level} ${navigation ? "is-clickable" : "is-static"}"${navigation} title="${this._escape(label)}"><strong>${value ?? "--"}</strong><small>${label}</small></button>`;
		}).join("");
		return this._renderSection("home-assistant", "mdi:home-assistant", this._t("sections.systemVersions"), `
			<div class="version-grid">
				${this._versionTile("mdi:home-assistant", this._t("labels.haCore"), this._entities.haCoreUpdate)}
				${this._versionTile("mdi:shield-home", this._t("labels.supervisor"), this._entities.supervisorUpdate)}
				${this._versionTile("mdi:harddisk", this._t("labels.haOs"), this._entities.haOsUpdate)}
			</div>
			<div class="instance-group">
				<div class="instance-group-title">${this._t("labels.configuration")}</div>
				<div class="instance-summary configuration-summary" style="--configuration-columns:${Math.max(1, configurationStats.length)}">${renderStats(configurationStats)}</div>
			</div>
			<div class="instance-group">
				<div class="instance-group-title">${this._t("labels.entities")}</div>
				<div class="instance-summary entities-summary">${renderStats(entityStats)}</div>
			</div>
		`, this._sectionSummary("home-assistant"));
	}

	_renderSystem() {
		const metrics = [
			["cpu", "mdi:cpu-64-bit", this._t("labels.cpu"), "%", "blue"],
			["memory", "mdi:memory", this._t("labels.memory"), "%", "purple"],
			["disk", "mdi:harddisk", this._t("labels.disk"), "%", "dusty-pink"],
		];
		return this._renderSection("system", "mdi:server", this._t("sections.system"), `
			<div class="resource-grid">${metrics.map(([key, icon, label, unit, tone]) => this._miniGraphTile(icon, label, this._entities[key], { unit, tone, decimals: 0, healthMetric: key })).join("")}</div>
			<div class="system-info-grid">
				${this._systemInfoTile("mdi:ip-network", `${this._t("labels.ipv4")}${this._networkInterface() ? ` (${this._escape(this._networkInterface())})` : ""}`, this._formatEntity(this._entities.ipv4, { raw: true }), this._entities.ipv4)}
				${this._systemInfoTile("mdi:clock-outline", this._t("labels.uptime"), this._formatUptime(this._entities.uptime), this._entities.uptime)}
			</div>
		`, this._sectionSummary("system"));
	}

	_systemInfoTile(icon, label, value, entityId) {
		return `<button type="button" class="version-tile system-info-tile" data-info-entity="${this._escape(entityId || "")}"${entityId ? ` data-more-info="${this._escape(entityId)}"` : ""}><ha-icon icon="${icon}"></ha-icon><span><small>${label}</small><strong data-role="info-value">${this._escape(String(value))}</strong></span></button>`;
	}

	_versionTile(icon, label, entityId) {
		const state = this._state(entityId);
		const installed = state?.attributes?.installed_version || "--";
		const latest = state?.attributes?.latest_version || "--";
		const updateAvailable = state?.state === "on";
		const status = updateAvailable
			? `${this._t("labels.updateAvailable")}: ${latest}`
			: this._t("labels.upToDate");
		return `<button type="button" class="version-tile ${updateAvailable ? "has-update" : "is-current"}"${entityId ? ` data-more-info="${this._escape(entityId)}"` : ""}><ha-icon icon="${icon}"></ha-icon><span><small>${label}</small><strong>${this._escape(installed)}</strong><em>${this._escape(status)}</em></span></button>`;
	}

	_isValidEntityId(entityId) {
		return typeof entityId === "string" && /^[a-z0-9_]+\.[a-z0-9_]+$/.test(entityId);
	}

	_getHistorySeries(history, entityId) {
		if (Array.isArray(history?.[entityId])) return history[entityId];
		if (!Array.isArray(history)) return [];
		const groups = history.filter(Array.isArray);
		const group = groups.find((items) => items.some((item) => item?.entity_id === entityId));
		if (group) return group.filter((item) => !item?.entity_id || item.entity_id === entityId);
		return history.filter((item) => item && !Array.isArray(item) && item.entity_id === entityId);
	}

	_normalizeMetricHistory(history, entityId) {
		const currentUnit = this._state(entityId)?.attributes?.unit_of_measurement || "";
		return this._getHistorySeries(history, entityId).map((item) => {
			const value = Number.parseFloat(item?.state ?? item?.s);
			const rawTime = item?.last_updated ?? item?.last_changed ?? item?.lu ?? item?.lc;
			const timestamp = typeof rawTime === "number" ? (rawTime < 100000000000 ? rawTime * 1000 : rawTime) : Date.parse(rawTime);
			const historicalUnit = item?.attributes?.unit_of_measurement ?? item?.a?.unit_of_measurement ?? currentUnit;
			return { timestamp, value, unit: historicalUnit };
		}).filter((point) => Number.isFinite(point.value) && Number.isFinite(point.timestamp)).sort((a, b) => a.timestamp - b.timestamp);
	}

	_groupHistory(points, start, end, duration = 5 * 60 * 1000) {
		const buckets = new Map();
		for (const point of points) {
			if (point.timestamp < start || point.timestamp > end) continue;
			const key = Math.floor(point.timestamp / duration) * duration;
			const bucket = buckets.get(key) || { sum: 0, count: 0 };
			bucket.sum += point.value; bucket.count += 1; buckets.set(key, bucket);
		}
		return [...buckets.entries()].sort(([a], [b]) => a - b).map(([timestamp, bucket]) => ({ timestamp: timestamp + duration / 2, value: bucket.sum / bucket.count }));
	}

	async _loadMetricHistory() {
		if (!this._hass?.callApi) return;
		const networkEntityIds = this._systemMonitorNetworks().flatMap(([, values]) => [values.networkIn, values.networkOut]);
		const entityIds = [...new Set([
			this._entities.cpu, this._entities.memory, this._entities.disk, this._entities.database,
			...networkEntityIds,
		].filter((id) => this._isValidEntityId(id)))];
		if (!entityIds.length) return;
		const key = entityIds.join("|");
		if (this._metricHistory.loading || (this._metricHistory.key === key && Date.now() - this._metricHistory.loadedAt < 300000)) return;
		this._metricHistory = { ...this._metricHistory, key, loading: true };
		try {
			const end = new Date();
			const start = new Date(end.getTime() - 24 * 3600000);
			const query = new URLSearchParams({ filter_entity_id: entityIds.join(","), end_time: end.toISOString(), significant_changes_only: "0" });
			const history = await this._hass.callApi("GET", `history/period/${start.toISOString()}?${query.toString()}`);
			const series = Object.fromEntries(entityIds.map((id) => [id, this._normalizeMetricHistory(history, id)]));
			this._metricHistory = { key, loadedAt: Date.now(), loading: false, series };
		} catch (error) {
			console.error("[ha-server-health-card][history] Unable to load 24-hour entity history", error);
			this._metricHistory = { key, loadedAt: Date.now(), loading: false, series: {} };
		}
		this._updateLiveMetrics();
		this._refreshHero();
	}

	_metricVariation24h(entityId) {
		const state = this._state(entityId);
		const currentBytes = this._dataSizeToBytes(state);
		if (!state || !Number.isFinite(currentBytes)) return null;
		const end = Date.now();
		const start = end - 24 * 3600000;
		const history = (this._metricHistory.series[entityId] || []).filter((point) => point.timestamp >= start && Number.isFinite(point.value));
		const first = history[0];
		if (!first || !Number.isFinite(first.value)) return null;
		const historicalState = { state: String(first.value), attributes: { unit_of_measurement: first.unit || state.attributes?.unit_of_measurement || "B" } };
		const firstBytes = this._dataSizeToBytes(historicalState);
		if (!Number.isFinite(firstBytes)) return null;
		const deltaBytes = currentBytes - firstBytes;
		const percent = firstBytes !== 0 ? deltaBytes / firstBytes * 100 : null;
		return { deltaBytes, percent };
	}

	_formatMetricVariation24h(entityId) {
		const variation = this._metricVariation24h(entityId);
		if (!variation || !Number.isFinite(variation.deltaBytes)) return "";
		const sign = variation.deltaBytes > 0 ? "+" : variation.deltaBytes < 0 ? "−" : "±";
		return `${sign}${this._formatBytes(Math.abs(variation.deltaBytes))}`;
	}

	_metricVariation24hTooltip(entityId) {
		const variation = this._metricVariation24h(entityId);
		if (!variation || !Number.isFinite(variation.percent)) return "";
		const sign = variation.percent > 0 ? "+" : variation.percent < 0 ? "−" : "±";
		const percent = new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(Math.abs(variation.percent));
		return this._t("labels.databaseSizeChange").replace("{percent}", `${sign}${percent}`);
	}

	_miniGraphTile(icon, label, entityId, options = {}) {
		const state = this._state(entityId);
		const raw = this._numericState(entityId);
		const decimals = options.decimals ?? 1;
		const sourceUnit = state?.attributes?.unit_of_measurement || options.unit || "";
		let displayValue = raw;
		let unit = sourceUnit;
		if (options.kilobytesPerSecond && Number.isFinite(raw)) {
			const normalized = String(sourceUnit).toLowerCase().replace(/\s/g, "");
			if (["mb/s", "mbyte/s", "mbps"].includes(normalized)) displayValue = raw * 1000;
			else if (["b/s", "byte/s"].includes(normalized)) displayValue = raw / 1000;
			else if (["bit/s", "bps"].includes(normalized)) displayValue = raw / 8000;
			else if (["kbit/s", "kbps"].includes(normalized)) displayValue = raw / 8;
			else if (["mbit/s"].includes(normalized)) displayValue = raw * 125;
			unit = "KB/s";
		}
		const shown = Number.isFinite(displayValue)
			? new Intl.NumberFormat(this._language(), { maximumFractionDigits: decimals }).format(displayValue)
			: this._t("common.notAvailable");
		const variation = options.showVariation24h ? this._formatMetricVariation24h(entityId) : "";
		const variationTooltip = options.showVariation24h ? this._metricVariation24hTooltip(entityId) : "";
		const healthLevel = options.healthMetric ? this._metricHealthLevel(options.healthMetric, raw) : "";
		const end = Date.now();
		const start = end - 24 * 3600000;
		const history = this._groupHistory(this._metricHistory.series[entityId] || [], start, end);

		if (history.length) {
			const first = history[0];
			if (first.timestamp > start) history.unshift({ timestamp: start, value: first.value });
			else first.timestamp = start;
		}
		if (Number.isFinite(raw)) {
			const last = history[history.length - 1];
			if (!last || end - last.timestamp > 1000) history.push({ timestamp: end, value: raw });
			else {
				last.timestamp = end;
				last.value = raw;
			}
		}
		const values = history.map((point) => point.value);
		const minimum = values.length ? Math.min(...values) : 0;
		const maximum = values.length ? Math.max(...values) : 1;
		const range = Math.max(maximum - minimum, Math.abs(maximum) * 0.05, 0.000001);
		const padding = range * 0.1;
		const scaleMin = minimum - padding;
		const scaleMax = maximum + padding;
		const scaleRange = Math.max(scaleMax - scaleMin, 0.000001);
		const path = history.length > 1 ? history.map((point, index) => {
			const x = ((point.timestamp - start) / (end - start)) * 120;
			const normalized = (point.value - scaleMin) / scaleRange;
			const y = 25 - Math.min(Math.max(normalized, 0), 1) * 22;
			return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
		}).join(" ") : "";
		const area = path ? `${path} L120,26 L0,26 Z` : "";
		return `<button type="button" class="mini-graph ${options.tone || "blue"} ${healthLevel}" data-metric-entity="${this._escape(entityId || "")}" data-metric-options="${this._escape(JSON.stringify(options))}"${entityId ? ` data-more-info="${this._escape(entityId)}"` : ""}>${path ? `<svg viewBox="0 0 120 26" preserveAspectRatio="none" aria-hidden="true"><path class="mini-area" d="${area}"></path><path class="mini-line" d="${path}"></path></svg>` : `<svg viewBox="0 0 120 26" preserveAspectRatio="none" aria-hidden="true"><path class="mini-area" d=""></path><path class="mini-line" d=""></path></svg>`}<ha-icon icon="${icon}"></ha-icon><span><small>${label}</small><strong data-role="metric-value">${shown}${Number.isFinite(raw) && unit ? ` ${this._escape(unit)}` : ""}</strong>${variation ? `<small class="metric-variation"${variationTooltip ? ` title="${this._escape(variationTooltip)}"` : ""}>${this._escape(variation)}</small>` : ""}</span></button>`;
	}

	_dataSizeToBytes(state) {
		if (!state) return null;
		const value = Number.parseFloat(state.state);
		if (!Number.isFinite(value)) return null;
		const factors = {
			bit: 1 / 8, kbit: 125, Mbit: 125e3, Gbit: 125e6,
			B: 1, kB: 1e3, KB: 1e3, MB: 1e6, GB: 1e9, TB: 1e12,
			KiB: 1024, MiB: 1024 ** 2, GiB: 1024 ** 3, TiB: 1024 ** 4,
		};
		return value * (factors[state.attributes?.unit_of_measurement || "B"] ?? 1);
	}

	_dataSizeMegabytes(entityId) {
		const bytes = this._dataSizeToBytes(this._state(entityId));
		return Number.isFinite(bytes) ? bytes / 1e6 : null;
	}

	_formatBytes(bytes) {
		if (!Number.isFinite(bytes)) return "--";
		const units = ["B", "KiB", "MiB", "GiB", "TiB"];
		let unitIndex = 0;
		let value = bytes;
		while (value >= 1024 && unitIndex < units.length - 1) {
			value /= 1024;
			unitIndex += 1;
		}
		const decimals = value >= 100 || unitIndex === 0 ? 0 : value >= 10 ? 1 : 2;
		return `${new Intl.NumberFormat(this._language(), { maximumFractionDigits: decimals }).format(value)} ${units[unitIndex]}`;
	}

	_systemMonitorDisks() {
		const discovered = this._discoverEntitiesFromRegistry();
		const disks = Object.fromEntries(
			Object.entries(discovered.disks || {}).map(([mount, values]) => [mount, { ...values }])
		);
		const entries = this._entityRegistry.length
			? this._entityRegistry
			: Object.values(this._hass?.entities || {});
		for (const entry of entries) {
			if (
				entry?.platform !== "systemmonitor" ||
				entry.hidden ||
				entry.disabled_by != null ||
				!this._hass?.states?.[entry.entity_id]
			) continue;
			const key = entry.translation_key;
			if (!["swap_free", "swap_use", "swap_use_percent"].includes(key)) continue;
			const normalizedKey = key.replace("swap_", "disk_");
			(disks.Swap ??= {})[normalizedKey] ??= entry.entity_id;
		}
		return disks;
	}

	_diskUsage(disk) {
		const used = this._dataSizeToBytes(this._state(disk.disk_use));
		const free = this._dataSizeToBytes(this._state(disk.disk_free));
		const percentState = this._numericState(disk.disk_use_percent);
		const total = Number.isFinite(used) && Number.isFinite(free) ? used + free : null;
		const percent = Number.isFinite(percentState)
			? percentState
			: Number.isFinite(used) && Number.isFinite(total) && total > 0 ? used / total * 100 : null;
		return { used, free, total, percent };
	}

	_formatStorageDetail(usage) {
		if (Number.isFinite(usage.used) && Number.isFinite(usage.total)) {
			return this._t("labels.usedOf")
				.replace("{used}", this._formatBytes(usage.used))
				.replace("{total}", this._formatBytes(usage.total));
		}
		if (Number.isFinite(usage.free)) {
			return this._t("labels.freeSpace").replace("{free}", this._formatBytes(usage.free));
		}
		return "--";
	}

	_databaseDailyGrowth7d() {
		const state = this._state(this._entities.database);
		const currentBytes = this._dataSizeToBytes(state);
		const points = this._databaseHistory7d.points || [];
		if (!state || !Number.isFinite(currentBytes) || !points.length) return [];
		const unit = state.attributes?.unit_of_measurement || "B";
		const toBytes = (point) => this._dataSizeToBytes({ state: String(point.value), attributes: { unit_of_measurement: point.unit || unit } });
		const now = Date.now();
		const dailyValues = [];
		for (let daysAgo = 7; daysAgo >= 0; daysAgo -= 1) {
			const target = now - daysAgo * 24 * 3600000;
			let selected = points[0];
			for (const point of points) {
				if (point.timestamp <= target) selected = point;
				else break;
			}
			const bytes = daysAgo === 0 ? currentBytes : toBytes(selected);
			if (Number.isFinite(bytes)) dailyValues.push({ timestamp: target, bytes });
		}
		return dailyValues.slice(1).map((item, index) => ({ timestamp: item.timestamp, value: item.bytes - dailyValues[index].bytes }));
	}

	_databaseDailyGrowthGraph() {
		const series = this._databaseDailyGrowth7d();
		if (series.length < 2) return { path: "", area: "" };
		const values = series.map((point) => point.value);
		const minimum = Math.min(...values);
		const maximum = Math.max(...values);
		const range = Math.max(maximum - minimum, Math.max(Math.abs(minimum), Math.abs(maximum)) * 0.05, 1);
		const padding = range * 0.1;
		const scaleMin = minimum - padding;
		const scaleMax = maximum + padding;
		const scaleRange = Math.max(scaleMax - scaleMin, 1);
		const path = series.map((point, index) => {
			const x = series.length === 1 ? 120 : index / (series.length - 1) * 120;
			const y = 25 - Math.min(Math.max((point.value - scaleMin) / scaleRange, 0), 1) * 22;
			return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
		}).join(" ");
		return { path, area: `${path} L120,26 L0,26 Z` };
	}

	_renderDatabase() {
		const state = this._state(this._entities.database);
		const bytes = this._dataSizeToBytes(state);
		const size = Number.isFinite(bytes) ? this._formatBytes(bytes) : this._t("common.notAvailable");
		const recorder = this._recorderInfo.data;
		const recorderHealthy = recorder?.recording === true && recorder?.thread_running === true;
		const recorderValue = recorder ? this._t(recorderHealthy ? "labels.running" : "labels.notRunning") : this._t("common.notAvailable");
		const backlog = Number.isFinite(Number(recorder?.backlog)) ? new Intl.NumberFormat(this._language()).format(Number(recorder.backlog)) : this._t("common.notAvailable");
		const tile = (icon, label, value) => `<div class="version-tile system-info-tile database-static-tile"><ha-icon icon="${icon}"></ha-icon><span><small>${this._escape(label)}</small><strong>${this._escape(value)}</strong></span></div>`;
		const graph = this._databaseDailyGrowthGraph();
		const growthTile = `<div class="mini-graph blue database-growth-tile">${graph.path ? `<svg viewBox="0 0 120 26" preserveAspectRatio="none" aria-hidden="true"><path class="mini-area" d="${graph.area}"></path><path class="mini-line" d="${graph.path}"></path></svg>` : `<svg viewBox="0 0 120 26" preserveAspectRatio="none" aria-hidden="true"><path class="mini-area" d=""></path><path class="mini-line" d=""></path></svg>`}<ha-icon icon="mdi:chart-line"></ha-icon><span><small>${this._t("labels.databaseGrowth7d")}</small><strong>${this._escape(this._formatDatabaseGrowth7d())}</strong></span></div>`;
		return this._renderSection("database", "mdi:database", this._t("sections.database"), `<div class="database-grid">${tile("mdi:database-check", this._t("labels.recorder"), recorderValue)}${tile("mdi:format-list-numbered", this._t("labels.backlog"), backlog)}${tile("mdi:database", this._t("labels.databaseSize"), size)}${growthTile}</div>`, this._sectionSummary("database"));
	}

	_renderStorage() {
		const disks = this._systemMonitorDisks();
		const rows = Object.entries(disks).map(([mount, disk]) => {
			const usage = this._diskUsage(disk);
			const percent = Number.isFinite(usage.percent) ? Math.max(0, Math.min(100, usage.percent)) : 0;
			const tone = this._healthLevelFor("disk", percent) || "healthy";
			const entityId = disk.disk_use || disk.disk_use_percent || disk.disk_free;
			const detail = this._formatStorageDetail(usage);
			return `<button type="button" class="storage-volume ${tone}" data-more-info="${this._escape(entityId)}"><div class="storage-volume-head"><ha-icon icon="mdi:harddisk"></ha-icon><strong>${this._escape(mount)}</strong><span class="storage-detail">${this._escape(detail)}</span><span class="storage-percent">${Number.isFinite(usage.percent) ? `${Math.round(percent)}%` : this._t("common.notAvailable")}</span></div><div class="storage-meter"><i style="width:${percent}%"></i></div></button>`;
		}).join("");
		if (!rows) return "";
		return this._renderSection("storage", "mdi:harddisk", this._t("sections.storage"), `<div class="storage-list">${rows}</div>`, this._sectionSummary("storage"));
	}

	_renderNetwork() {
		const interfaces = this._systemMonitorNetworks();
		const rows = interfaces.length
			? interfaces.map(([name, values]) => `<div class="network-interface" data-network-interface="${this._escape(name)}"><div class="traffic-grid">${this._miniGraphTile("mdi:download", `${this._t("labels.download")} (${this._escape(name)})`, values.networkIn, { decimals: 1, tone: "green", kilobytesPerSecond: true })}${this._miniGraphTile("mdi:upload", `${this._t("labels.upload")} (${this._escape(name)})`, values.networkOut, { decimals: 1, tone: "blue", kilobytesPerSecond: true })}</div></div>`).join("")
			: `<div class="traffic-grid">${this._miniGraphTile("mdi:download", this._t("labels.download"), this._entities.networkIn, { decimals: 1, tone: "green", kilobytesPerSecond: true })}${this._miniGraphTile("mdi:upload", this._t("labels.upload"), this._entities.networkOut, { decimals: 1, tone: "blue", kilobytesPerSecond: true })}</div>`;
		return this._renderSection("network", "mdi:lan", this._t("sections.network"), `<div class="network-interfaces">${rows}</div>`, this._sectionSummary("network"));
	}

	_updateMetadata(state) {
		const deviceClass = String(state.attributes?.device_class || "").toLowerCase();
		const entityId = state.entity_id.toLowerCase();
		const name = `${state.attributes?.title || ""} ${state.attributes?.friendly_name || ""}`.toLowerCase();
		const haystack = `${entityId} ${name}`;
		if (/^update\.home_assistant_(?:core|supervisor|operating_system)(?:_|$)/.test(entityId)) return { category: "home-assistant", icon: "mdi:home-assistant", label: this._t("labels.updateGroupHomeAssistant") };
		if (deviceClass === "firmware") return { category: "firmware", icon: "mdi:chip", label: this._t("labels.updateTypeFirmware") };
		if (/addon|add_on|zigbee2mqtt|mosquitto|studio code|terminal|ssh|matter server|thread border router|esphome/.test(haystack)) return { category: "apps", icon: "mdi:docker", label: this._t("labels.updateTypeApplication") };
		if (this._marketplaceUpdateEntities.has(state.entity_id)) return { category: "marketplace", icon: "mdi:package-up", label: this._t("labels.updateTypeMarketplace") };
		return { category: "others", icon: "mdi:package-up", label: this._t("labels.updateGroupOthers") };
	}


	async _loadSignedPictureUrl(path) {
		if (!path || this._signedPictureUrls.has(path) || this._signedPictureLoading.has(path)) return;

		let parsedUrl;
		try {
			parsedUrl = new URL(path, window.location.origin);
		} catch (_error) {
			this._signedPictureUrls.set(path, null);
			return;
		}

		const isAbsoluteUrl = /^[a-z][a-z0-9+.-]*:/i.test(path);
		if (isAbsoluteUrl) {
			const isSameOrigin = parsedUrl.origin === window.location.origin;
			const isZigbee2MqttGitHubAsset = parsedUrl.hostname === "github.com"
				&& (parsedUrl.pathname === "/Koenkk/zigbee2mqtt" || parsedUrl.pathname.startsWith("/Koenkk/zigbee2mqtt/"));
			const trusted = parsedUrl.protocol === "https:" && (isSameOrigin || isZigbee2MqttGitHubAsset);
			this._signedPictureUrls.set(path, trusted ? parsedUrl.href : null);
			if (trusted) this._refreshDynamicContent(["updates"]);
			return;
		}

		// Only absolute local Home Assistant paths are signed.
		if (!path.startsWith("/") || !this._hass?.callWS) {
			this._signedPictureUrls.set(path, null);
			return;
		}

		this._signedPictureLoading.add(path);
		try {
			const response = await this._hass.callWS({
				type: "auth/sign_path",
				path,
				expires: 3600,
			});
			const signedPath = typeof response === "string" ? response : response?.path;
			if (!signedPath) {
				this._signedPictureUrls.set(path, null);
				return;
			}
			const signedUrl = new URL(signedPath, window.location.origin);
			this._signedPictureUrls.set(path, signedUrl.origin === window.location.origin ? signedUrl.href : null);
		} catch (error) {
			console.debug("[ha-server-health-card][update-picture] Unable to load image", error);
			this._signedPictureUrls.set(path, null);
		} finally {
			this._signedPictureLoading.delete(path);
		}
		this._refreshDynamicContent(["updates"]);
	}

	_renderUpdateRow(state) {
		const picture = state.attributes.entity_picture;
		if (picture && !this._signedPictureUrls.has(picture)) this._loadSignedPictureUrl(picture);
		const pictureUrl = picture ? this._signedPictureUrls.get(picture) : null;
		const metadata = this._updateMetadata(state);
		const icon = state.attributes.icon || (metadata.category === "marketplace" ? "mdi:view-grid" : metadata.icon) || "mdi:view-grid";
		const visual = pictureUrl ? `<img class="update-picture" src="${this._escape(pictureUrl)}" alt="">` : `<ha-icon icon="${this._escape(icon)}"></ha-icon>`;
		const name = this._escape(state.attributes.title || state.attributes.friendly_name || state.entity_id);
		const installed = this._escape(state.attributes.installed_version || "--");
		const latest = this._escape(state.attributes.latest_version || "--");
		return `<div class="update-row"><button type="button" class="update-info" data-more-info="${this._escape(state.entity_id)}">${visual}<span><strong>${name}</strong><small class="update-meta"><span class="update-type"><ha-icon icon="${this._escape(metadata.icon)}"></ha-icon>${this._escape(metadata.label)}</span><span class="update-version"><b>${installed}</b><ha-icon icon="mdi:arrow-right"></ha-icon><b>${latest}</b></span></small></span></button><button type="button" class="update-action" data-more-info="${this._escape(state.entity_id)}"><ha-icon icon="mdi:package-down"></ha-icon><span>${this._t("labels.update")}</span></button></div>`;
	}

	_renderUpdates(updates) {
		const groups = [
			["home-assistant", this._t("labels.updateGroupHomeAssistant")],
			["marketplace", this._t("labels.updateGroupMarketplace")],
			["firmware", this._t("labels.updateGroupFirmware")],
			["apps", this._t("labels.updateGroupApps")],
			["others", this._t("labels.updateGroupOthers")],
		];
		const classified = new Map(groups.map(([key]) => [key, []]));
		for (const state of updates) {
			const category = this._updateMetadata(state).category;
			(classified.get(category) || classified.get("others")).push(state);
		}
		const rows = updates.length ? groups.map(([key, label]) => {
			const items = classified.get(key);
			if (!items?.length) return "";
			return `<section class="update-group ${key}"><div class="update-group-head"><strong>${this._escape(label)}</strong><span>${items.length}</span></div><div class="update-group-list">${items.map((state) => this._renderUpdateRow(state)).join("")}</div></section>`;
		}).join("") : `<div class="empty"><ha-icon icon="mdi:check-circle"></ha-icon>${this._t("card.updatesUpToDate")}</div>`;
		const updateLevel = this._healthLevelFor("updates", updates.length);
		const badge = updates.length ? `<b class="badge update-badge ${updateLevel || "healthy"}">${updates.length} ${this._t("labels.available")}</b>` : "";
		return this._renderSection("updates", "mdi:package-up", this._t("sections.updates"), `<div class="updates">${rows}</div>`, badge);
	}

	_backupSizeHistoryKey(entityId) {
		const state = this._state(entityId);
		return entityId && state ? `${entityId}|${state.state}|${state.attributes?.unit_of_measurement || ""}` : "";
	}

	async _loadBackupSizeVariation(entityId) {
		if (!this._hass?.callApi || !this._isValidEntityId(entityId)) return;
		const key = this._backupSizeHistoryKey(entityId);
		if (!key || this._backupSizeHistory.loading) return;
		if (this._backupSizeHistory.key === key && Date.now() - this._backupSizeHistory.loadedAt < 3600000) return;
		this._backupSizeHistory = { key, loading: true, loadedAt: 0, previous: null, delta: null, percent: null };
		try {
			const end = new Date();
			const start = new Date(end.getTime() - 30 * 24 * 3600000);
			const query = new URLSearchParams({ filter_entity_id: entityId, end_time: end.toISOString(), significant_changes_only: "0" });
			const history = await this._hass.callApi("GET", `history/period/${start.toISOString()}?${query.toString()}`);
			const values = this._getHistorySeries(history, entityId).map((item) => Number.parseFloat(item?.state ?? item?.s)).filter(Number.isFinite);
			const current = this._numericState(entityId);
			let previous = null;
			for (let index = values.length - 1; index >= 0; index -= 1) {
				if (!Number.isFinite(current) || Math.abs(values[index] - current) > 0.000001) { previous = values[index]; break; }
			}
			const delta = Number.isFinite(current) && Number.isFinite(previous) ? current - previous : null;
			const percent = Number.isFinite(delta) && Number.isFinite(previous) && previous !== 0 ? delta / previous * 100 : null;
			this._backupSizeHistory = { key, loading: false, loadedAt: Date.now(), previous, delta, percent };
		} catch (error) {
			console.debug("[ha-server-health-card][backup-size-history] Unable to load previous backup size", error);
			this._backupSizeHistory = { key, loading: false, loadedAt: Date.now(), previous: null, delta: null, percent: null };
		}
		this._refreshDynamicContent(["backups"]);
		this._refreshHero();
	}

	_formatBackupSizeVariation(entityId) {
		const variation = this._backupSizeHistory;
		if (variation.key !== this._backupSizeHistoryKey(entityId) || !Number.isFinite(variation.delta)) return "";
		const state = this._state(entityId);
		const deltaBytes = this._dataSizeToBytes({ state: String(Math.abs(variation.delta)), attributes: { unit_of_measurement: state?.attributes?.unit_of_measurement || "B" } });
		if (!Number.isFinite(deltaBytes)) return "";
		const sign = variation.delta > 0 ? "+" : variation.delta < 0 ? "−" : "±";
		return `${sign}${this._formatBytes(deltaBytes)}`;
	}

	_backupSizeVariationTooltip(entityId) {
		const variation = this._backupSizeHistory;
		if (variation.key !== this._backupSizeHistoryKey(entityId) || !Number.isFinite(variation.percent)) return "";
		const sign = variation.percent > 0 ? "+" : variation.percent < 0 ? "−" : "±";
		const percent = new Intl.NumberFormat(this._language(), { maximumFractionDigits: 1 }).format(Math.abs(variation.percent));
		return this._t("labels.backupSizeChange").replace("{percent}", `${sign}${percent}`);
	}

	_backupRelativeDate(value) {
		const timestamp = Date.parse(value);
		if (!Number.isFinite(timestamp)) return this._t("common.notAvailable");
		const hours = Math.max(0, Math.round((Date.now() - timestamp) / 3600000));
		if (hours < 48) return this._t("labels.hoursAgo").replace("{hours}", new Intl.NumberFormat(this._language()).format(hours));
		return this._formatDateValue(value);
	}

	_backupDisplaySize(backup) {
		const sizes = Object.entries(backup?.agents || {}).map(([id, data]) => ({ id, size: Number(data?.size) })).filter((item) => Number.isFinite(item.size));
		const local = sizes.find((item) => item.id === "hassio.local");
		return this._formatBytes((local || sizes[0])?.size);
	}

	_backupTypeLabel(backup) {
		if (backup?.extra_metadata?.["supervisor.addon_update"]) return this._t("labels.backupAppUpdate");
		if (backup?.with_automatic_settings === true || backup?.extra_metadata?.with_automatic_settings === true) return this._t("labels.backupAutomatic");
		return "";
	}

	_backupFailureReason(backup, agentNames) {
		const reasons = [];
		for (const id of backup?.failed_agent_ids || []) {
			reasons.push(this._t("labels.backupFailedDestination").replace("{name}", agentNames.get(id) || id));
		}
		for (const addon of backup?.failed_addons || []) {
			const name = typeof addon === "string" ? addon : addon?.name || addon?.slug || String(addon);
			reasons.push(this._t("labels.backupFailedAddon").replace("{name}", name));
		}
		for (const folder of backup?.failed_folders || []) {
			const name = typeof folder === "string" ? folder : folder?.name || folder?.slug || String(folder);
			reasons.push(this._t("labels.backupFailedFolder").replace("{name}", name));
		}
		return reasons.length ? this._t("labels.backupFailureReason").replace("{reason}", reasons.join(" · ")) : "";
	}

	_renderBackupDetails() {
		const backups = [...(this._backupManager.backups || [])].sort((a, b) => Date.parse(b?.date || 0) - Date.parse(a?.date || 0));
		if (!backups.length) return "";
		const agentNames = new Map((this._backupManager.agents || []).map((agent) => [agent.agent_id, agent.name || agent.agent_id]));
		const rows = backups.map((backup) => {
			const failedIds = new Set(backup?.failed_agent_ids || []);
			const destinations = Object.keys(backup?.agents || {}).map((id) => `<span class="backup-detail-destination ${failedIds.has(id) ? "failed" : ""}">${this._escape(agentNames.get(id) || id)}</span>`).join(", ");
			const type = this._backupTypeLabel(backup);
			const metadata = [this._backupRelativeDate(backup?.date),  this._escape(type), destinations].filter(Boolean).join(" · ");
			const failed = failedIds.size || (backup?.failed_addons || []).length || (backup?.failed_folders || []).length;
			const failureReason = failed ? this._backupFailureReason(backup, agentNames) : "";
			return `<div class="backup-detail-row ${failed ? "failed" : ""}"><ha-icon icon="mdi:archive-outline"></ha-icon><div class="backup-detail-main"><strong>${this._escape(backup?.name || backup?.backup_id || this._t("labels.backupDetails"))}</strong><small>${metadata}</small>${failureReason ? `<small class="backup-detail-failure">${this._escape(failureReason)}</small>` : ""}</div><span class="backup-detail-size">${this._escape(this._backupDisplaySize(backup))}</span></div>`;
		}).join("");
		return `<div class="backup-details"><button type="button" class="backup-details-head" data-toggle-backup-details aria-expanded="${String(this._backupDetailsOpen)}"><span>${this._t("labels.backupDetails")}</span><b>${backups.length}</b><ha-icon icon="mdi:chevron-${this._backupDetailsOpen ? "up" : "down"}"></ha-icon></button><div class="backup-details-list"${this._backupDetailsOpen ? "" : " hidden"}>${rows}</div></div>`;
	}

	_renderBackupLocations() {
		const agents = this._backupAgentStats();
		if (!agents.length) return "";
		const rows = agents.map((agent) => {
			const date = agent.latest?.date ? this._formatDateValue(agent.latest.date) : this._t("common.notAvailable");
			const count = this._t("labels.backupCount").replace("{count}", new Intl.NumberFormat(this._language()).format(agent.count));
			const latest = this._t("labels.backupLatest").replace("{date}", date);
			const size = Number.isFinite(agent.size) ? this._formatBytes(agent.size) : this._t("common.notAvailable");
			const statusClass = agent.failed ? "failed" : "ok";
			const status = agent.failed ? this._t("labels.backupFailed") : this._t("labels.backupOk");
			const icon = agent.id === "hassio.local" ? "mdi:harddisk" : "mdi:cloud-check-outline";
			return `<div class="backup-agent ${statusClass}"><ha-icon icon="${icon}"></ha-icon><div class="backup-agent-main"><strong>${this._escape(agent.name)}</strong><small>${this._escape(count)} · ${this._escape(latest)}</small></div><div class="backup-agent-side"><span>${this._escape(size)}</span><b class="backup-result-pill ${statusClass}">${this._escape(status)}</b></div></div>`;
		}).join("");
		return `<div class="backup-locations"><div class="instance-group-title">${this._t("labels.backupLocations")}</div><div class="backup-agent-list">${rows}</div></div>`;
	}

	_renderBackups() {
		const sizeEntity = this._entities.lastBackupSize;
		if (sizeEntity) setTimeout(() => this._loadBackupSizeVariation(sizeEntity), 0);
		const sizeBytes = this._dataSizeToBytes(this._state(sizeEntity));
		const sizeValue = Number.isFinite(sizeBytes) ? this._formatBytes(sizeBytes) : this._t("common.notAvailable");
		const delta = this._formatBackupSizeVariation(sizeEntity);
		const attributes = sizeEntity ? ` role="button" tabindex="0" data-more-info="${this._escape(sizeEntity)}"` : "";
		const sizeLevel = this._metricHealthLevel("backupSize");
		const sizeTile = `<div class="version-tile system-info-tile backup-size ${sizeLevel}"${attributes}><ha-icon icon="mdi:database-arrow-down"></ha-icon><span><small>${this._t("labels.backupSize")}</small><strong>${this._escape(sizeValue)}${delta ? ` · ${this._escape(delta)}` : ""}</strong></span></div>`;
		return this._renderSection("backups", "mdi:backup-restore", this._t("sections.backups"), `<div class="backup-grid"><div class="version-tile system-info-tile backup-state"${this._entities.backupStatus ? ` role="button" tabindex="0" data-more-info="${this._escape(this._entities.backupStatus)}"` : ""}><ha-icon icon="mdi:database-check"></ha-icon><span><small>${this._t("labels.backupStatus")}</small><strong>${this._escape(this._formatEntity(this._entities.backupStatus))}</strong></span></div>${sizeTile}${this._backupDateTile("mdi:history", this._t("labels.lastBackup"), this._entities.lastBackup, "past")}${this._backupDateTile("mdi:calendar-clock", this._t("labels.nextBackup"), this._entities.nextBackup, "future")}</div>${this._renderBackupLocations()}${this._renderBackupDetails()}`, this._sectionSummary("backups"));
	}


	_navigate(path) {
		if (!path || typeof path !== "string") return;
		history.pushState(null, "", path);
		window.dispatchEvent(new CustomEvent("location-changed"));
	}

	_bindNavigation(root = this.shadowRoot) {
		root.querySelectorAll("[data-navigate]").forEach((element) => {
			element.addEventListener("click", () => this._navigate(element.dataset.navigate));
		});
	}

	_bindMoreInfo(root = this.shadowRoot) {
		root.querySelectorAll("[data-more-info]").forEach((button) => {
			button.addEventListener("click", () => {
				const entityId = button.dataset.moreInfo;
				if (!this._isValidEntityId(entityId)) return;
				this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
			});
		});
	}

	_bindHealthDetails(root = this.shadowRoot) {
		root.querySelectorAll("[data-toggle-health]").forEach((button) => {
			button.addEventListener("click", () => {
				const details = this.shadowRoot.querySelector("[data-health-details]");
				if (!details) return;
				this._healthDetailsOpen = details.hidden;
				details.hidden = !this._healthDetailsOpen;
				button.setAttribute("aria-expanded", String(this._healthDetailsOpen));
				const chevron = button.querySelector("ha-icon");
				if (chevron) chevron.setAttribute("icon", `mdi:chevron-${this._healthDetailsOpen ? "up" : "down"}`);
				this._saveCollapsedSections();
			});
		});
	}

	_bindBackupDetails(root = this.shadowRoot) {
		root.querySelectorAll("[data-toggle-backup-details]").forEach((button) => {
			button.addEventListener("click", () => {
				this._backupDetailsOpen = !this._backupDetailsOpen;
				const list = this.shadowRoot.querySelector(".backup-details-list");
				if (list) list.hidden = !this._backupDetailsOpen;
				button.setAttribute("aria-expanded", String(this._backupDetailsOpen));
				const icon = button.querySelector("ha-icon");
				if (icon) icon.setAttribute("icon", `mdi:chevron-${this._backupDetailsOpen ? "up" : "down"}`);
			});
		});
	}

	_bindContainerGroups(root = this.shadowRoot) {
		root.querySelectorAll("[data-toggle-container-group]").forEach((button) => {
			button.addEventListener("click", () => {
				const key = button.dataset.toggleContainerGroup;
				if (this._containerGroupsCollapsed.has(key)) this._containerGroupsCollapsed.delete(key);
				else this._containerGroupsCollapsed.add(key);
				const collapsed = this._containerGroupsCollapsed.has(key);
				button.closest("[data-container-group]")?.classList.toggle("collapsed", collapsed);
				button.setAttribute("aria-expanded", String(!collapsed));
				button.querySelector("ha-icon")?.setAttribute("icon", `mdi:chevron-${collapsed ? "down" : "up"}`);
				this._saveCollapsedSections();
			});
		});
	}

	_bindEvents() {
		this.shadowRoot.querySelectorAll("[data-toggle-section]").forEach((button) => {
			button.addEventListener("click", () => this._toggleSection(button.dataset.toggleSection));
		});
		this._bindMoreInfo();
		this._bindNavigation();
		this._bindHealthDetails();
		this._bindBackupDetails();
		this._bindContainerGroups();
	}

	_applyCollapsedState() {
		this.shadowRoot.querySelectorAll("[data-section-id]").forEach((section) => {
			const id = section.dataset.sectionId;
			const collapsed = this._collapsed.has(id);
			section.classList.toggle("collapsed", collapsed);
			const button = section.querySelector("[data-toggle-section]");
			if (button) button.setAttribute("aria-expanded", String(!collapsed));
			const icon = section.querySelector(".section-side ha-icon");
			if (icon) icon.setAttribute("icon", `mdi:chevron-${collapsed ? "down" : "up"}`);
		});
	}

	_applyContainerGroupsState() {
		this.shadowRoot.querySelectorAll("[data-container-group]").forEach((group) => {
			const key = group.dataset.containerGroup;
			const collapsed = this._containerGroupsCollapsed.has(key);
			group.classList.toggle("collapsed", collapsed);
			const button = group.querySelector("[data-toggle-container-group]");
			if (!button) return;
			button.setAttribute("aria-expanded", String(!collapsed));
			button.querySelector("ha-icon")?.setAttribute("icon", `mdi:chevron-${collapsed ? "down" : "up"}`);
		});
	}

	_toggleSection(sectionId) {
		if (this._collapsed.has(sectionId)) {
			this._collapsed.delete(sectionId);
		} else {
			this._collapsed.add(sectionId);
		}

		this._applyCollapsedState();
		this._saveCollapsedSections();
	}

	_storageKey() {
		const lovelace = this.closest("hui-card")?.closest("hui-view") || document.querySelector("hui-view");
		const viewPath = String(lovelace?.getAttribute?.("data-view-path") || window.location.pathname || "default")
			.toLowerCase()
			.replace(/[^a-z0-9/_-]+/g, "-")
			.replace(/^\/+|\/+$/g, "") || "default";
		const cards = [...document.querySelectorAll("ha-server-health-card")];
		const cardIndex = Math.max(0, cards.indexOf(this));
		return `ha-server-health-card:collapsed-sections:${viewPath}:${cardIndex}`;
	}

	_defaultCollapsedSections() {
		return new Set(["home-assistant", "system", "network", "storage", "database", "containers-apps", "updates", "backups"]);
	}

	_normalizeCollapsedSections(value) {
		const allowed = new Set(["home-assistant", "system", "storage", "network", "database", "containers-apps", "updates", "backups"]);
		const source = Array.isArray(value) ? value : [];
		return new Set(source.filter((sectionId) => allowed.has(sectionId)));
	}

	_normalizeUserPreferences(value) {
		// Backward compatible with the previous array-only user_data format and health_details_open key.
		if (Array.isArray(value)) return { collapsedSections: this._normalizeCollapsedSections(value), globalHealthOpen: false, containerGroupsCollapsed: new Set(["systems", "apps"]) };
		const source = value && typeof value === "object" ? value : {};
		const hasStoredSections = Array.isArray(source.collapsed_sections);
		return {
			collapsedSections: hasStoredSections
				? this._normalizeCollapsedSections(source.collapsed_sections)
				: this._defaultCollapsedSections(),
			globalHealthOpen: source.global_health_open === true || source.health_details_open === true,
			containerGroupsCollapsed: new Set(Array.isArray(source.container_groups_collapsed) ? source.container_groups_collapsed.filter((key) => ["systems", "apps"].includes(key)) : ["systems", "apps"]),
		};
	}

	_applyHealthDetailsState() {
		const details = this.shadowRoot.querySelector("[data-health-details]");
		const button = this.shadowRoot.querySelector("[data-toggle-health]");
		if (details) details.hidden = !this._healthDetailsOpen;
		if (button) button.setAttribute("aria-expanded", String(Boolean(details && this._healthDetailsOpen)));
	}

	async _ensureCollapsedSectionsStorage() {
		if (!this._hass?.connection || !this._config || this._collapsedLoading) return;
		const key = this._storageKey();
		if (key === this._collapsedStorageKey && this._collapsedLoaded) return;
		this._collapsedLoading = true;
		if (typeof this._unsubscribeCollapsed === "function") this._unsubscribeCollapsed();
		this._unsubscribeCollapsed = null;
		this._collapsedStorageKey = key;
		try {
			const response = await this._hass.connection.sendMessagePromise({ type: "frontend/get_user_data", key });
			const preferences = this._normalizeUserPreferences(response?.value ?? response);
			this._collapsed = preferences.collapsedSections;
			this._healthDetailsOpen = preferences.globalHealthOpen;
			this._containerGroupsCollapsed = preferences.containerGroupsCollapsed;
			this._collapsedLoaded = true;
			this._applyCollapsedState();
			this._applyHealthDetailsState();
			this._applyContainerGroupsState();
			this._unsubscribeCollapsed = await this._hass.connection.subscribeMessage((message) => {
				const next = this._normalizeUserPreferences(message?.value ?? message);
				const current = JSON.stringify({ collapsed: [...this._collapsed].sort(), health: this._healthDetailsOpen, containerGroups: [...this._containerGroupsCollapsed].sort() });
				const incoming = JSON.stringify({ collapsed: [...next.collapsedSections].sort(), health: next.globalHealthOpen, containerGroups: [...next.containerGroupsCollapsed].sort() });
				if (current === incoming) return;
				this._collapsed = next.collapsedSections;
				this._healthDetailsOpen = next.globalHealthOpen;
				this._containerGroupsCollapsed = next.containerGroupsCollapsed;
				this._applyCollapsedState();
				this._applyHealthDetailsState();
				this._applyContainerGroupsState();
			}, { type: "frontend/subscribe_user_data", key });
		} catch (error) {
			console.warn("[ha-server-health-card] Unable to load collapsible section preferences", error);
			this._collapsedLoaded = true;
		} finally {
			this._collapsedLoading = false;
		}
	}

	async _saveCollapsedSections() {
		if (!this._hass?.connection) return;
		if (!this._collapsedStorageKey) await this._ensureCollapsedSectionsStorage();
		if (!this._collapsedStorageKey) return;
		try {
			await this._hass.connection.sendMessagePromise({
				type: "frontend/set_user_data",
				key: this._collapsedStorageKey,
				value: {
					collapsed_sections: [...this._collapsed],
					global_health_open: this._healthDetailsOpen,
					health_details_open: this._healthDetailsOpen,
					container_groups_collapsed: [...this._containerGroupsCollapsed],
				},
			});
		} catch (error) {
			console.warn("[ha-server-health-card] Unable to save collapsible section preferences", error);
		}
	}

	connectedCallback() {
		this._startContainersAppsRefresh();
	}

	disconnectedCallback() {
		if (typeof this._unsubscribeCollapsed === "function") this._unsubscribeCollapsed();
		this._unsubscribeCollapsed = null;
		if (this._containersAppsRefreshTimer) clearInterval(this._containersAppsRefreshTimer);
		this._containersAppsRefreshTimer = null;
	}

	_escape(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
	}

	_styles() {
		return `
			:host { overflow-anchor:none; --blue:#039be5; --purple:#7857d8; --green:#23a86b; --orange:#f59b23; --red:#e34d59; --ha-server-tile-background:#f5f5f5; --sh-font-title:20px; --sh-font-section:16px; --sh-font-body:14px; --sh-font-small:12px; --sh-weight-regular:400; --sh-weight-medium:500; display:block; font-family:var(--ha-card-header-font-family,inherit); }
			:host(.dark-mode) { --ha-server-tile-background:#252525; }
			ha-card { overflow:hidden; overflow-anchor:none; }
			.shell { padding:12px; }
			.loading { padding:24px; text-align:center; }
			.hero { padding:2px 2px 10px; } .hero.pill-only { display:none; } .hero.pill-only + .health-status { margin-top:0; }
			.hero-row { display:grid; grid-template-columns:42px minmax(0,1fr); gap:10px; align-items:center; } .hero-row.without-icon { grid-template-columns:minmax(0,1fr); } .hero.header-compact .hero-row { grid-template-columns:minmax(0,1fr); } .hero.header-compact .hero-row:not(.without-icon) { grid-template-columns:42px minmax(0,1fr); }
			.hero-icon { display:grid; place-items:center; width:42px; height:42px; border-radius:12px; color:#fff; background:linear-gradient(145deg,#35c5f0,var(--blue)); }
			.hero-icon ha-icon { --mdc-icon-size:27px; }
			.hero-copy { min-width:0; }
			.hero-copy h2 { margin:0; font-size:var(--sh-font-title); font-weight:var(--sh-weight-medium); line-height:1.2; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
			.hero-copy span { display:block; margin-top:2px; color:var(--secondary-text-color); font-size:var(--sh-font-small); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
			.health-status { display:grid; grid-template-columns:auto minmax(0,1fr) auto; align-items:center; gap:9px; width:100%; box-sizing:border-box; margin:0 0 7px; padding:6px 9px; border:1px solid color-mix(in srgb,currentColor 35%,var(--divider-color)); border-radius:9px; color:inherit; background:color-mix(in srgb,currentColor 7%,transparent); font:inherit; text-align:left; cursor:pointer; }
			.health-status-main { display:inline-flex; align-items:center; gap:6px; min-width:0; } .health-status-main i { width:6px; height:6px; flex:0 0 auto; border-radius:50%; background:currentColor; } .health-status-main strong { font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); } .health-status-count { overflow:hidden; color:var(--secondary-text-color); font-size:var(--sh-font-small); text-overflow:ellipsis; white-space:nowrap; } .health-status > ha-icon { --mdc-icon-size:16px; }
			.healthy { color:var(--green); } .warning { color:var(--orange); } .critical { color:var(--red); } .info { color:var(--blue); }
			.health-status.healthy { background:color-mix(in srgb,var(--green) 7%,transparent); } .health-status.warning { background:color-mix(in srgb,var(--orange) 8%,transparent); } .health-status.critical { background:color-mix(in srgb,var(--red) 8%,transparent); }
			.health-details { display:grid; gap:5px; margin:0 2px 10px; padding:8px 10px; border:1px solid var(--divider-color); border-left:3px solid currentColor; border-radius:9px; background:var(--ha-server-tile-background); } .health-details[hidden] { display:none; } .health-details-title { color:var(--secondary-text-color); font-size:var(--sh-font-small); font-weight:var(--sh-weight-medium); text-transform:uppercase; letter-spacing:.04em; } .health-issue { display:grid; grid-template-columns:6px minmax(0,1fr) auto; align-items:center; gap:7px; font-size:var(--sh-font-body); } .health-issue i { width:6px; height:6px; border-radius:50%; background:currentColor; } .health-issue span { color:var(--primary-text-color); } .health-issue strong { color:currentColor; font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); white-space:nowrap; }
			.section { border-top:1px solid var(--divider-color); }
			.shell.no-header-content > .section:first-of-type { border-top:0; }
			.section-head { display:flex; align-items:center; justify-content:space-between; width:100%; padding:9px 2px 7px; border:0; color:var(--primary-text-color); background:transparent; font:inherit; cursor:pointer; }
			.section-title,.section-side { display:flex; align-items:center; gap:7px; } .section-title { font-size:var(--sh-font-section); font-weight:var(--sh-weight-medium); } .section-side { min-width:0; } .section-summary { display:none; align-items:center; gap:9px; min-width:0; white-space:nowrap; } .section.collapsed .section-summary { display:flex; } .section-summary-item { display:inline-flex; align-items:baseline; gap:3px; color:var(--primary-text-color); font-size:10px; font-weight:600; } .section-summary-item:not(:last-child)::after { content:"·"; margin-left:6px; color:var(--divider-color); font-weight:400; } .section-summary-item b { color:var(--secondary-text-color); font-size:9px; font-weight:400; } .section-summary-item.warning,.section-summary-item.warning b { color:var(--orange); } .section-summary-item.critical,.section-summary-item.critical b { color:var(--red); } .backup-section-summary { gap:0; } .backup-summary-size { display:inline-flex; align-items:center; color:var(--primary-text-color); font-size:10px; font-weight:600; white-space:nowrap; } .backup-summary-size.warning { color:var(--orange); } .backup-summary-size.critical { color:var(--red); } .backup-summary-size::after { content:"·"; margin:0 7px; color:var(--divider-color); font-weight:400; } .backup-result-pill { color:inherit; } .backup-result-pill.ok { color:var(--green); background:color-mix(in srgb,var(--green) 14%,transparent); } .backup-result-pill.failed { color:var(--red); background:color-mix(in srgb,var(--red) 14%,transparent); } .backup-result-pill.unknown { color:var(--secondary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 12%,transparent); } .network-section-summary { gap:10px; overflow:hidden; } .network-summary-interface { display:inline-flex; align-items:baseline; gap:5px; min-width:0; font-size:9px; white-space:nowrap; } .network-summary-interface:not(:last-child)::after { content:"·"; margin-left:5px; color:var(--divider-color); } .network-summary-interface b { color:var(--secondary-text-color); font-size:9px; font-weight:400; } .network-summary-download,.network-summary-upload { display:inline-flex; align-items:baseline; gap:3px; min-width:0; } .network-summary-download i,.network-summary-upload i { color:var(--secondary-text-color); font-style:normal; font-size:9px; font-weight:400; } .network-summary-download strong,.network-summary-upload strong { color:var(--primary-text-color); font-size:10px; font-weight:600; } .section-title ha-icon { color:var(--primary-color); --mdc-icon-size:19px; }
			.section-body { padding:0 0 8px; } .section.collapsed .section-body { display:none; }
			.resource-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:7px; }
			.resource { min-width:0; padding:9px; border-radius:10px; background:var(--ha-server-tile-background); }
			.resource-label { display:flex; align-items:center; gap:5px; color:var(--secondary-text-color); font-size:10px; font-weight:700; } .resource-label ha-icon { --mdc-icon-size:17px; }
			.resource-value { margin-top:6px; color:var(--primary-text-color); font-size:20px; font-weight:700; line-height:1; } .resource-value small { margin-left:2px; font-size:11px; }
			.meter { height:5px; margin-top:8px; overflow:hidden; border-radius:999px; background:var(--divider-color); } .meter span { display:block; height:100%; border-radius:inherit; background:currentColor; }
			.blue { --mini-color:var(--blue); } .purple { --mini-color:var(--purple); } .dusty-pink { --mini-color:#D8A7B1; } .orange { --mini-color:var(--orange); } .green { --mini-color:var(--green); }
			.mini-graph { position:relative; display:grid; grid-template-columns:20px minmax(0,1fr); grid-template-rows:11px 17px; align-items:start; column-gap:6px; row-gap:2px; min-width:0; min-height:58px; padding:8px 9px 7px; overflow:hidden; border:1px solid var(--divider-color); border-radius:12px; color:var(--primary-text-color); background:var(--ha-server-tile-background); font:inherit; text-align:left; cursor:pointer; }
			.mini-graph.warning { border-color:var(--orange); }
			.mini-graph.critical { border-color:var(--red); }
			.mini-graph svg { position:absolute; z-index:0; left:0; right:0; bottom:0; width:100%; height:27px; pointer-events:none; }
			.mini-area { opacity:.10; stroke:none; fill:var(--mini-color,var(--blue)); } .mini-line { fill:none; opacity:.72; stroke:var(--mini-color,var(--blue)); stroke-width:1; vector-effect:non-scaling-stroke; }
			.mini-graph > ha-icon { position:relative; z-index:1; grid-column:1; grid-row:1 / 3; align-self:start; width:20px; --mdc-icon-size:18px; color:var(--mini-color,var(--blue)); }
			.mini-graph > span { position:relative; z-index:1; display:contents; }
			.mini-graph small { grid-column:2; grid-row:1; align-self:start; overflow:hidden; color:var(--secondary-text-color); font-size:var(--sh-font-small); line-height:1.1; text-overflow:ellipsis; white-space:nowrap; }
			.mini-graph strong { grid-column:2; grid-row:2; align-self:start; margin-top:0; overflow:hidden; color:var(--primary-text-color); font-family:inherit; font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); line-height:1.2; text-overflow:ellipsis; white-space:nowrap; }
			.metric-variation { position:relative; z-index:1; grid-column:2; display:block; margin-top:1px; overflow:hidden; color:var(--secondary-text-color); font-size:var(--sh-font-small); font-weight:400; line-height:1.1; text-overflow:ellipsis; white-space:nowrap; cursor:help; } .mini-graph:has(.metric-variation) { min-height:68px; grid-template-rows:11px 17px 11px; } .mini-graph:has(.metric-variation) .metric-variation { grid-row:3; } .version-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:7px; }
			.system-info-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:7px; margin-top:7px; }
			.version-tile { display:grid; grid-template-columns:22px minmax(0,1fr); align-items:center; gap:7px; min-width:0; padding:9px; border:1px solid var(--divider-color); border-radius:10px; color:var(--primary-text-color); background:var(--ha-server-tile-background); font:inherit; text-align:left; cursor:pointer; }
			.version-tile ha-icon { color:var(--primary-color); --mdc-icon-size:20px; } .version-tile span,.version-tile small,.version-tile strong,.version-tile em { display:block; min-width:0; }
			.version-tile small { overflow:hidden; color:var(--secondary-text-color); font-size:var(--sh-font-small); line-height:1.1; text-overflow:ellipsis; white-space:nowrap; } .version-tile strong { margin-top:2px; overflow:hidden; font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); line-height:1.15; text-overflow:ellipsis; white-space:nowrap; } .version-tile em { margin-top:3px; overflow:hidden; color:var(--green); font-size:var(--sh-font-small); font-style:normal; line-height:1.15; text-overflow:ellipsis; white-space:nowrap; }
			.version-tile.has-update { border-color:var(--orange); } .version-tile.has-update ha-icon,.version-tile.has-update em { color:var(--orange); }
			.instance-group { margin-top:8px; padding:9px 10px 10px; border:1px solid var(--divider-color); border-radius:9px; background:var(--ha-server-tile-background); } .instance-group-title { margin:0 0 8px; color:var(--secondary-text-color); font-size:var(--sh-font-small); font-weight:var(--sh-weight-medium); line-height:1.2; text-transform:uppercase; letter-spacing:.04em; } .instance-summary { display:grid; gap:10px 14px; } .configuration-summary { grid-template-columns:repeat(var(--configuration-columns,5),minmax(0,1fr)); } .entities-summary { grid-template-columns:repeat(4,minmax(0,1fr)); }
			.instance-stat { display:flex; flex-direction:column; min-width:0; padding:0; border:0; color:inherit; background:transparent; font:inherit; text-align:left; cursor:default; } .instance-stat.is-clickable { cursor:pointer; } .instance-stat.is-clickable:hover strong,.instance-stat.is-clickable:focus-visible strong { color:var(--primary-color); } .instance-stat.is-clickable:focus-visible { outline:1px solid var(--primary-color); outline-offset:3px; border-radius:4px; } .instance-stat strong { color:var(--primary-text-color); font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); line-height:1.2; } .instance-stat small { margin-top:2px; overflow:hidden; color:var(--secondary-text-color); font-size:var(--sh-font-small); line-height:1.2; text-overflow:ellipsis; white-space:nowrap; } .instance-stat.warning strong,.instance-stat.warning small { color:var(--orange); }
			.system-info-tile strong { white-space:normal; overflow-wrap:anywhere; }
			.network-interfaces { display:grid; gap:9px; } .network-interface + .network-interface { padding-top:9px; border-top:1px solid var(--divider-color); } .info-grid,.traffic-grid,.health-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:6px; margin-top:7px; }
			.info,.traffic,.health-item { display:flex; align-items:center; gap:8px; min-width:0; padding:9px; border-radius:9px; background:var(--ha-server-tile-background); }
			.info ha-icon,.traffic ha-icon,.health-item ha-icon { flex:0 0 auto; --mdc-icon-size:21px; } .info div,.traffic div,.health-item div { min-width:0; } .info span,.traffic span,.health-item span { display:block; color:var(--secondary-text-color); font-size:9px; } .info strong,.traffic strong,.health-item strong { display:block; margin-top:2px; color:var(--primary-text-color); font-size:12px; overflow:hidden; text-overflow:ellipsis; }
			.info.ipv4 { overflow:visible; } .info.ipv4 > div { flex:1 1 0; min-width:0; overflow:visible; } .info.ipv4 strong { display:block; width:max-content; max-width:none; overflow:visible; text-overflow:clip; white-space:nowrap; font-size:12px; line-height:1.2; }
			.disk { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:6px 10px; padding:10px; border-radius:10px; background:var(--ha-server-tile-background); } .disk small { display:block; margin-top:2px; color:var(--secondary-text-color); font-size:9px; overflow:hidden; text-overflow:ellipsis; } .disk .meter { grid-column:1/-1; margin-top:0; }
			.updates { display:grid; gap:12px; } .update-group { display:grid; gap:3px; } .update-group + .update-group { padding-top:10px; border-top:1px solid var(--divider-color); } .update-group-head { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:0 2px 3px; } .update-group-head strong { color:var(--secondary-text-color); font-size:9px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; } .update-group-head span { display:inline-flex; align-items:center; justify-content:center; box-sizing:border-box; min-width:18px; height:18px; padding:0 5px; border-radius:999px; color:var(--secondary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 11%,transparent); font-size:9px; font-weight:600; } .update-group-list { display:grid; } .update-row { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:8px; padding:7px 2px; border-bottom:1px solid var(--divider-color); } .update-row:last-child { border-bottom:0; } .update-info { display:grid; grid-template-columns:22px minmax(0,1fr); align-items:center; gap:8px; min-width:0; padding:0; border:0; color:var(--primary-text-color); background:transparent; font:inherit; text-align:left; cursor:pointer; } .update-info > ha-icon { color:var(--secondary-text-color); --mdc-icon-size:20px; } .update-picture { width:20px; height:20px; object-fit:contain; border-radius:4px; } .update-info strong,.update-info small { display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; } .update-info strong { font-size:11px; } .update-info small { margin-top:4px; color:var(--secondary-text-color); font-size:10px; line-height:1.4; } .update-meta { display:flex !important; align-items:center; gap:10px; min-width:0; } .update-type,.update-version { display:inline-flex; align-items:center; gap:5px; min-width:0; } .update-type { flex:0 0 auto; color:var(--secondary-text-color); font-size:10px; font-weight:500; } .update-type ha-icon { --mdc-icon-size:13px; } .update-version { overflow:hidden; color:var(--primary-text-color); font-size:11px; } .update-version b { font-weight:600; white-space:nowrap; } .update-version b:last-child { font-weight:700; } .update-version ha-icon { flex:0 0 auto; color:var(--secondary-text-color); --mdc-icon-size:16px; } .update-action { display:inline-flex; align-items:center; justify-content:center; gap:5px; min-width:58px; padding:5px 9px; border:0; border-radius:10px; color:var(--primary-color); background:color-mix(in srgb,var(--primary-color) 14%,transparent); font:inherit; font-size:10px; font-weight:700; cursor:pointer; } .update-action ha-icon { --mdc-icon-size:14px; } .update-action:hover { background:color-mix(in srgb,var(--primary-color) 22%,transparent); }
			.badge,.backup-result-pill { display:inline-flex; align-items:center; justify-content:center; box-sizing:border-box; min-width:18px; min-height:18px; padding:2px 5px; border-radius:999px; font-size:10px; font-weight:400; line-height:14px; text-align:center; white-space:nowrap; } .badge { color:var(--blue); background:color-mix(in srgb,var(--blue) 12%,transparent); }
			.update-badge.healthy { color:var(--green); background:color-mix(in srgb,var(--green) 14%,transparent); } .update-badge.warning { color:var(--orange); background:color-mix(in srgb,var(--orange) 14%,transparent); } .update-badge.critical { color:var(--red); background:color-mix(in srgb,var(--red) 14%,transparent); }
			.database-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); align-items:stretch; gap:6px; } .database-grid .database-growth-tile { box-sizing:border-box; min-height:58px; height:58px; } .database-growth-tile > ha-icon { color:var(--primary-color); }
			.storage-list { display:grid; gap:5px; }
			.storage-volume { display:grid; gap:7px; width:100%; padding:8px 3px 9px; border:0; border-bottom:1px solid var(--divider-color); color:var(--primary-text-color); background:transparent; font:inherit; text-align:left; cursor:pointer; } .storage-volume:last-child { border-bottom:0; }
			.storage-volume-head { display:grid; grid-template-columns:20px minmax(80px,1fr) auto auto; align-items:center; gap:8px; }
			.storage-volume-head ha-icon { color:var(--secondary-text-color); --mdc-icon-size:18px; }
			.storage-volume-head strong { overflow:hidden; color:var(--primary-text-color); font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); line-height:1.3; text-overflow:ellipsis; white-space:nowrap; }
			.storage-detail { color:var(--secondary-text-color); font-size:var(--sh-font-small); line-height:1.3; white-space:nowrap; }
			.storage-percent { min-width:32px; color:var(--primary-text-color); font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); line-height:1.3; text-align:right; white-space:nowrap; }
			.storage-meter { height:5px; overflow:hidden; border-radius:999px; background:var(--divider-color); } .storage-meter i { display:block; height:100%; border-radius:inherit; background:var(--green); }
			.storage-volume.warning .storage-meter i { background:var(--orange); } .storage-volume.warning .storage-percent { color:var(--orange); }
			.storage-volume.critical .storage-meter i { background:var(--red); } .storage-volume.critical .storage-percent { color:var(--red); }
			.empty { display:flex; justify-content:center; align-items:center; gap:6px; padding:12px; color:var(--green); font-size:11px; }
			.containers-apps { display:grid; gap:9px; } .containers-group { overflow:hidden; border:1px solid var(--divider-color); border-radius:10px; background:var(--ha-server-tile-background); } .containers-group-head { display:grid; grid-template-columns:minmax(0,1fr) auto 18px; align-items:center; gap:7px; width:100%; padding:8px 10px; border:0; border-bottom:1px solid var(--divider-color); color:var(--primary-text-color); background:transparent; font:inherit; text-align:left; cursor:pointer; } .containers-group.collapsed .containers-group-head { border-bottom:0; } .containers-group-head strong { color:var(--secondary-text-color); font-size:var(--sh-font-small); font-weight:var(--sh-weight-medium); text-transform:uppercase; letter-spacing:.04em; } .containers-group-head span,.containers-summary { color:var(--primary-text-color); font-size:10px; font-weight:600; white-space:nowrap; } .containers-group-head ha-icon { color:var(--secondary-text-color); --mdc-icon-size:17px; } .container-list { display:grid; } .containers-group.collapsed .container-list { display:none; } .container-row { display:grid; grid-template-columns:34px minmax(0,1fr) auto; grid-template-areas:"icon main status" "icon stats stats"; align-items:center; gap:4px 9px; min-width:0; padding:8px 10px; border-bottom:1px solid var(--divider-color); } .container-row:last-child { border-bottom:0; } .container-icon { grid-area:icon; display:grid; place-items:center; width:30px; height:30px; border-radius:50%; color:var(--secondary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 12%,transparent); } .container-icon ha-icon { --mdc-icon-size:17px; } .container-main { grid-area:main; min-width:0; } .container-main strong,.container-main small { display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; } .container-main strong { color:var(--primary-text-color); font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); } .container-main small { margin-top:2px; color:var(--secondary-text-color); font-size:10px; } .container-status { grid-area:status; display:inline-flex; align-items:center; gap:4px; justify-self:end; margin:0; padding:2px 6px; border-radius:999px; color:var(--green); background:color-mix(in srgb,var(--green) 13%,transparent); font-size:10px; font-weight:500; white-space:nowrap; } .container-status ha-icon { flex:0 0 auto; --mdc-icon-size:12px; } .container-row.stopped .container-status { color:var(--secondary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 10%,transparent); } .container-stats { grid-area:stats; min-width:0; } .container-stats strong { display:block; overflow:hidden; color:var(--primary-text-color); font-size:10px; font-weight:600; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
			.backup-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
			.backup-locations { margin-top:9px; padding:9px 10px 4px; border:1px solid var(--divider-color); border-radius:10px; background:var(--ha-server-tile-background); }
			.backup-agent-list { display:grid; }
			.backup-agent { display:grid; grid-template-columns:22px minmax(0,1fr) auto; align-items:center; gap:8px; min-width:0; padding:8px 0; border-bottom:1px solid var(--divider-color); }
			.backup-agent:last-child { border-bottom:0; }
			.backup-agent > ha-icon { color:var(--primary-color); --mdc-icon-size:20px; }
			.backup-agent.failed > ha-icon { color:var(--red); }
			.backup-agent-main { min-width:0; }
			.backup-agent-main strong,.backup-agent-main small { display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
			.backup-agent-main strong { color:var(--primary-text-color); font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); }
			.backup-agent-main small { margin-top:3px; color:var(--secondary-text-color); font-size:var(--sh-font-small); }
			.backup-agent-side { display:flex; align-items:center; gap:8px; white-space:nowrap; }
			.backup-agent-side > span { color:var(--primary-text-color); font-size:var(--sh-font-small); font-weight:var(--sh-weight-medium); } .backup-state { cursor:default; } .backup-state ha-icon { color:var(--primary-color); } .backup-grid .backup-size.warning { border-color:var(--orange); } .backup-grid .backup-size.critical { border-color:var(--red); } .backup-grid [data-more-info],.backup-state[role="button"] { cursor:pointer; } .backup-date-tile em { color:var(--secondary-text-color); }
			.backup-details { margin-top:9px; overflow:hidden; border:1px solid var(--divider-color); border-radius:10px; background:var(--ha-server-tile-background); }
			.backup-details-head { display:grid; grid-template-columns:minmax(0,1fr) auto 18px; align-items:center; gap:7px; width:100%; padding:9px 10px; border:0; color:var(--primary-text-color); background:transparent; font:inherit; text-align:left; cursor:pointer; }
			.backup-details-head span { font-size:var(--sh-font-small); font-weight:var(--sh-weight-medium); text-transform:uppercase; letter-spacing:.04em; } .backup-details-head b { display:inline-flex; align-items:center; justify-content:center; min-width:18px; height:18px; padding:0 5px; border-radius:999px; color:var(--secondary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 11%,transparent); font-size:9px; font-weight:600; } .backup-details-head ha-icon { --mdc-icon-size:17px; color:var(--secondary-text-color); }
			.backup-details-list { display:grid; border-top:1px solid var(--divider-color); } .backup-details-list[hidden] { display:none; }
			.backup-detail-row { display:grid; grid-template-columns:34px minmax(0,1fr) auto; align-items:center; gap:9px; min-width:0; padding:8px 10px; border-bottom:1px solid var(--divider-color); } .backup-detail-row:last-child { border-bottom:0; } .backup-detail-row > ha-icon { display:grid; place-items:center; width:30px; height:30px; border-radius:50%; color:var(--secondary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 12%,transparent); --mdc-icon-size:17px; } .backup-detail-row.failed > ha-icon { color:var(--red); }
			.backup-detail-main { min-width:0; } .backup-detail-main strong,.backup-detail-main small { display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; } .backup-detail-main strong { color:var(--primary-text-color); font-size:var(--sh-font-body); font-weight:var(--sh-weight-medium); line-height:1.2; } .backup-detail-main small { margin-top:2px; color:var(--secondary-text-color); font-size:var(--sh-font-small); line-height:1.2; } .backup-detail-main .backup-detail-failure { color:var(--red); font-weight:var(--sh-weight-medium); white-space:normal; } .backup-detail-destination.failed { color:var(--red); } .backup-detail-size { padding:2px 6px; border-radius:999px; color:var(--primary-text-color); background:color-mix(in srgb,var(--secondary-text-color) 18%,transparent); font-size:10px; font-weight:600; white-space:nowrap; }
			@media (max-width:600px) { .container-row { grid-template-columns:34px minmax(0,1fr) auto; grid-template-areas:"icon main status" "icon stats stats"; gap:4px 7px; } .container-status { align-self:start; margin-top:0; } .container-stats { margin-top:2px; text-align:left; } .container-stats strong { text-align:left; } }  
			@media (max-width:420px) { .section-summary { max-width:48vw; } .update-meta { flex-wrap:wrap; gap:2px 8px; } .update-version { flex-basis:100%; } }
			@media (max-width:350px) { .hero-row { grid-template-columns:38px minmax(0,1fr); } .resource-grid,.version-grid,.system-info-grid,.info-grid,.traffic-grid,.health-grid,.backup-grid,.database-grid { grid-template-columns:1fr; } }
		`;
	}

}

/* ---------------------------------------------------------------------- */
/*  Visual editor                                                         */
/* ---------------------------------------------------------------------- */
class HaServerHealthCardEditor extends HTMLElement {
	static SECTION_ICONS = {
		general: "mdi:cog-outline",
		layout: "mdi:view-dashboard-edit-outline",
		health: "mdi:heart-pulse",
	};

	static DEFAULTS = DEFAULT_CONFIG;

	constructor() {
		super();
		this._rendered = false;
	}

	setConfig(config) {
		this._config = { ...config };
		if (!this._rendered) {
			this._render();
			this._rendered = true;
		}
		this._updateValues();
	}

	set hass(hass) {
		this._hass = hass;
		if (!this._rendered && this._config) {
			this._render();
			this._rendered = true;
		}
		this._updateValues();
	}

	connectedCallback() {
		if (!this._rendered && this._config) {
			this._render();
			this._rendered = true;
			this._updateValues();
		}
	}

	_language() {
		return resolveLanguage(this._hass, this._config?.language || "auto");
	}

	_t(path) {
		return translate(this._language(), path);
	}

	_sectionSummary(icon, title) {
		return `<summary><span class="section-title"><ha-icon icon="${icon}"></ha-icon>${title}</span></summary>`;
	}

	_switchRow(key, label) {
		return `<div class="switch-row"><span class="switch-label">${label}</span><ha-switch data-config="${key}"></ha-switch></div>`;
	}

	_numberField(key, label, options = {}) {
		const defaultValue = HaServerHealthCardEditor.DEFAULTS[key];
		const minimum = options.minimum ?? 0;
		const maximum = options.maximum ?? 100;
		const step = options.step ?? 1;
		const suffix = `<span class="field-suffix${options.suffix ? "" : " empty"}">${options.suffix || "%"}</span>`;
		return `<label class="number-field"><span>${label}</span><span class="number-input-wrap"><input data-config="${key}" type="number" min="${minimum}" max="${maximum}" step="${step}" placeholder="${defaultValue}">${suffix}</span></label>`;
	}

	_getSectionDefinitions() {
		return [
			{ key: "home-assistant", label: this._t("sections.systemVersions"), icon: "mdi:home-assistant", visibility: "show_home_assistant" },
			{ key: "system", label: this._t("sections.system"), icon: "mdi:server", visibility: "show_system" },
			{ key: "network", label: this._t("sections.network"), icon: "mdi:lan", visibility: "show_network" },
			{ key: "storage", label: this._t("sections.storage"), icon: "mdi:harddisk", visibility: "show_storage" },
			{ key: "database", label: this._t("sections.database"), icon: "mdi:database", visibility: "show_database" },
			{ key: "containers-apps", label: this._t("sections.containersApps"), icon: "mdi:docker", visibility: "show_containers_apps" },
			{ key: "updates", label: this._t("sections.updates"), icon: "mdi:package-up", visibility: "show_updates" },
			{ key: "backups", label: this._t("sections.backups"), icon: "mdi:backup-restore", visibility: "show_backups" },
		];
	}

	_renderSectionOrder() {
		const definitions = this._getSectionDefinitions();
		const byKey = new Map(definitions.map((section) => [section.key, section]));
		const configured = Array.isArray(this._config?.section_order) ? this._config.section_order : [];
		const order = [...new Set([...configured, ...definitions.map((section) => section.key)])]
			.filter((key) => byKey.has(key));
		return order.map((key, index) => {
			const section = byKey.get(key);
			return `
				<div class="section-order-item" data-section-key="${key}">
					<div class="section-order-row">
						<ha-icon class="section-icon" icon="${section.icon}"></ha-icon>
						<span class="section-label">${section.label}</span>
						<div class="section-order-actions">
							<button type="button" class="section-move" data-section-move="up" title="${this._t("editor.moveUp")}" aria-label="${this._t("editor.moveUp")}"${index === 0 ? " disabled" : ""}><ha-icon icon="mdi:chevron-up"></ha-icon></button>
							<button type="button" class="section-move" data-section-move="down" title="${this._t("editor.moveDown")}" aria-label="${this._t("editor.moveDown")}"${index === order.length - 1 ? " disabled" : ""}><ha-icon icon="mdi:chevron-down"></ha-icon></button>
						</div>
						<ha-switch data-config="${section.visibility}"></ha-switch>
					</div>
				</div>
			`;
		}).join("");
	}

	_render() {
		if (!this._config) return;
		this.innerHTML=`<style>
			.editor{display:grid;gap:12px;padding:8px 0}details.section{overflow:hidden;background:var(--ha-card-background,var(--card-background-color));border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius,12px)}summary{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px;color:var(--primary-text-color);font-size:16px;font-weight:600;cursor:pointer;list-style:none;user-select:none}summary::-webkit-details-marker{display:none}summary::after{content:"";width:8px;height:8px;border-right:2px solid var(--secondary-text-color);border-bottom:2px solid var(--secondary-text-color);transform:rotate(45deg);transition:transform .2s ease}details[open] summary::after{transform:rotate(225deg)}details[open] summary{border-bottom:1px solid var(--divider-color)}.section-title{display:flex;align-items:center;gap:10px}.section-title ha-icon{--mdc-icon-size:20px;color:var(--secondary-text-color)}.section-content{display:grid;gap:14px;padding:16px}.field,label{display:grid;min-width:0;gap:6px;color:var(--secondary-text-color);font-size:12px}input{box-sizing:border-box;width:100%;min-height:42px;padding:8px 10px;color:var(--primary-text-color);background:var(--ha-card-background,var(--card-background-color));border:1px solid var(--divider-color);border-radius:8px;font:inherit}input::placeholder{color:var(--secondary-text-color);opacity:.65}ha-selector{display:block;width:100%}.layout-options{display:grid;gap:4px;padding-bottom:10px;border-bottom:1px solid var(--divider-color)}.health-analysis-content{display:grid;gap:14px}.health-analysis-separator{height:1px;background:var(--divider-color)}.health-fields{display:grid;gap:14px}.health-fields.disabled{opacity:.45;pointer-events:none}.health-thresholds{display:grid;gap:8px}.variation-thresholds{padding-top:12px;border-top:1px solid var(--divider-color)}.health-thresholds-title{color:var(--primary-text-color);font-size:13px;font-weight:600}.health-thresholds-grid{display:grid;grid-template-columns:minmax(120px,1.4fr) repeat(2,minmax(86px,1fr));gap:8px 10px;align-items:end}.health-thresholds-head{color:var(--secondary-text-color);font-size:11px;font-weight:600;text-align:center}.health-metric-label{align-self:center;color:var(--primary-text-color);font-size:13px}.number-field{gap:5px}.health-thresholds-grid .number-field>span:first-child{display:none}.number-input-wrap{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:7px}.number-input-wrap input{min-width:0}.number-field.invalid input{border-color:var(--error-color,var(--red,#e34d59))}.number-field.invalid .field-suffix{color:var(--error-color,var(--red,#e34d59))}.threshold-validation{display:none;grid-column:2/-1;margin-top:-2px;color:var(--error-color,var(--red,#e34d59));font-size:10px;line-height:1.25}.threshold-validation.visible{display:block}.field-suffix{width:20px;color:var(--secondary-text-color);font-size:12px;text-align:left}.field-suffix.empty{visibility:hidden}.health-checks{display:grid;gap:4px;padding-top:10px;border-top:1px solid var(--divider-color)}.health-checks-title{margin-bottom:2px;color:var(--primary-text-color);font-size:13px;font-weight:600}.switch-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:42px}.switch-label{color:var(--primary-text-color);font-size:14px}.section-order-list{display:grid;overflow:hidden;border:1px solid var(--divider-color);border-radius:10px}.section-order-item{display:grid;background:var(--ha-card-background,var(--card-background-color));border-bottom:1px solid var(--divider-color)}.section-order-item:last-child{border-bottom:0}.section-order-row{display:grid;grid-template-columns:22px minmax(0,1fr) auto auto;align-items:center;gap:8px;min-height:42px;padding:2px 8px}.section-icon{--mdc-icon-size:18px;color:var(--secondary-text-color)}.section-label{min-width:0;overflow:hidden;color:var(--primary-text-color);font-size:14px;text-overflow:ellipsis;white-space:nowrap}.section-order-actions{display:flex;align-items:center;gap:0}.section-move{display:grid;place-items:center;width:30px;height:32px;padding:0;border:0;border-radius:8px;color:var(--secondary-text-color);background:transparent;cursor:pointer}.section-move ha-icon{--mdc-icon-size:18px}.section-move:not(:disabled):hover,.section-move:not(:disabled):focus-visible{color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 10%,transparent)}.section-move:focus-visible{outline:1px solid var(--primary-color);outline-offset:1px}.section-move:disabled{opacity:.25;cursor:default}ha-switch{flex-shrink:0}@media(max-width:480px){.health-thresholds-grid{grid-template-columns:minmax(100px,1.25fr) repeat(2,minmax(72px,1fr));gap:7px}.number-input-wrap{gap:4px}}</style>
		<div class="editor"><details class="section">${this._sectionSummary(HaServerHealthCardEditor.SECTION_ICONS.general,this._t("editor.general"))}<div class="section-content">
		<label>${this._t("editor.title")}<input data-config="title" type="text" placeholder="${this._escape(this._t("card.title"))}"></label>
		<label>${this._t("editor.subtitle")}<input data-config="subtitle" type="text" placeholder="${this._escape(this._t("card.subtitle"))}"></label>
		<div class="field"><span>${this._t("editor.language")}</span><ha-selector data-config="language"></ha-selector></div></div></details>
		<details class="section">${this._sectionSummary(HaServerHealthCardEditor.SECTION_ICONS.layout,this._t("editor.cardLayout"))}<div class="section-content"><div class="layout-options">${this._switchRow("show_icon",this._t("editor.showIcon"))}${this._switchRow("show_header",this._t("editor.showHeader"))}</div><div class="section-order-list">${this._renderSectionOrder()}</div></div></details>
		<details class="section">${this._sectionSummary(HaServerHealthCardEditor.SECTION_ICONS.health,this._t("editor.healthAnalysis"))}<div class="section-content health-analysis-content">
		${this._switchRow("health_analysis_enabled",this._t("editor.healthAnalysisEnabled"))}
		<div class="field"><span>${this._t("editor.healthStatusDisplay")}</span><ha-selector data-config="health_status_display"></ha-selector></div>
		<div class="health-analysis-separator"></div>
		<div class="health-fields">
		<div class="health-thresholds"><div class="health-thresholds-title">${this._t("editor.healthThresholds")}</div><div class="health-thresholds-grid">
		<div></div><div class="health-thresholds-head">${this._t("editor.warningThreshold")}</div><div class="health-thresholds-head">${this._t("editor.criticalThreshold")}</div>
		<div class="health-metric-label">${this._t("labels.cpu")}</div>${this._numberField("health_cpu_warning","",{suffix:"%"})}${this._numberField("health_cpu_critical","",{suffix:"%"})}
		<div class="health-metric-label">${this._t("labels.memory")}</div>${this._numberField("health_memory_warning","",{suffix:"%"})}${this._numberField("health_memory_critical","",{suffix:"%"})}
		<div class="health-metric-label">${this._t("labels.disk")}</div>${this._numberField("health_disk_warning","",{suffix:"%"})}${this._numberField("health_disk_critical","",{suffix:"%"})}
		<div class="health-metric-label">${this._t("labels.database")}</div>${this._numberField("health_database_warning","",{suffix:"MB",maximum:1000000})}${this._numberField("health_database_critical","",{suffix:"MB",maximum:1000000})}
		<div class="health-metric-label">${this._t("labels.backupSizeHealth")}</div>${this._numberField("health_backup_size_warning","",{suffix:"MB",maximum:1000000})}${this._numberField("health_backup_size_critical","",{suffix:"MB",maximum:1000000})}
		<div class="health-metric-label">${this._t("labels.availableUpdates")}</div>${this._numberField("health_updates_warning","",{maximum:10000})}${this._numberField("health_updates_critical","",{maximum:10000})}
		<div class="health-metric-label">${this._t("labels.unavailableRatio")}</div>${this._numberField("health_unavailable_warning","",{suffix:"%",step:0.1})}${this._numberField("health_unavailable_critical","",{suffix:"%",step:0.1})}
		</div></div>
		<div class="health-thresholds variation-thresholds"><div class="health-thresholds-title">${this._t("editor.healthVariationThresholds")}</div><div class="health-thresholds-grid">
		<div></div><div class="health-thresholds-head">${this._t("editor.warningThreshold")}</div><div class="health-thresholds-head">${this._t("editor.criticalThreshold")}</div>
		<div class="health-metric-label">${this._t("labels.database")}</div>${this._numberField("health_database_variation_warning","",{suffix:"%",maximum:10000,step:0.1})}${this._numberField("health_database_variation_critical","",{suffix:"%",maximum:10000,step:0.1})}
		<div class="health-metric-label">${this._t("labels.backupSizeHealth")}</div>${this._numberField("health_backup_variation_warning","",{suffix:"%",maximum:10000,step:0.1})}${this._numberField("health_backup_variation_critical","",{suffix:"%",maximum:10000,step:0.1})}
		</div></div>
		<div class="health-checks"><div class="health-checks-title">${this._t("editor.platformChecks")}</div>${this._switchRow("health_check_core_update",this._t("editor.checkHaCoreUpdate"))}${this._switchRow("health_check_os_update",this._t("editor.checkHaOsUpdate"))}${this._switchRow("health_check_backup",this._t("editor.checkBackupFailure"))}</div>
		</div></div></details></div>`;
		this._initializeSelectors();
		this._initializeInputs();
		this._initializeSwitches();
		this._initializeSectionOrder();
	}

	_initializeSelectors() {
		this.querySelectorAll("ha-selector[data-config]").forEach((selector) => {
			selector.hass = this._hass;
			const healthStatusDisplay = selector.dataset.config === "health_status_display";
			selector.selector = {
				select: {
					mode: "dropdown",
					options: healthStatusDisplay ? [
						{ value: "always", label: this._t("editor.healthStatusAlways") },
						{ value: "problems", label: this._t("editor.healthStatusProblems") },
						{ value: "never", label: this._t("editor.healthStatusNever") },
					] : [
						{ value: "auto", label: this._t("editor.auto") },
						{ value: "fr", label: "Français" },
						{ value: "en", label: "English" },
					],
				},
			};
			selector.addEventListener("value-changed", (event) => this._valueChanged(event));
		});
	}

	_initializeInputs() {
		this.querySelectorAll("input[data-config]").forEach((element) => {
			element.addEventListener("input", (event) => this._valueChanged(event));
		});
	}

	_initializeSwitches() {
		this.querySelectorAll("ha-switch[data-config]").forEach((element) => {
			element.addEventListener("change", (event) => {
				this._valueChanged(event);
				if (element.dataset.config === "health_analysis_enabled") this._updateHealthAnalysisState();
			});
		});
	}

	_updateHealthAnalysisState() {
		const enabled = this._config?.health_analysis_enabled ?? HaServerHealthCardEditor.DEFAULTS.health_analysis_enabled;
		const fields = this.querySelector(".health-fields");
		if (fields) fields.classList.toggle("disabled", !enabled);
		fields?.querySelectorAll("input,ha-switch").forEach((element) => { element.disabled = !enabled; });
		const statusDisplay = this.querySelector('[data-config="health_status_display"]');
		if (statusDisplay) statusDisplay.disabled = !enabled;
	}

	_initializeSectionOrder() {
		const list = this.querySelector(".section-order-list");
		if (!list) return;
		list.querySelectorAll("[data-section-move]").forEach((button) => {
			button.addEventListener("click", () => {
				const item = button.closest(".section-order-item");
				const key = item?.dataset.sectionKey;
				const direction = button.dataset.sectionMove;
				if (!key || !["up", "down"].includes(direction)) return;
				const defaults = this._getSectionDefinitions().map((section) => section.key);
				const configured = Array.isArray(this._config?.section_order) ? this._config.section_order : [];
				const order = [...new Set([...configured, ...defaults])].filter((sectionKey) => defaults.includes(sectionKey));
				const index = order.indexOf(key);
				const nextIndex = direction === "up" ? index - 1 : index + 1;
				if (index < 0 || nextIndex < 0 || nextIndex >= order.length) return;
				[order[index], order[nextIndex]] = [order[nextIndex], order[index]];
				this._emitConfig({ ...this._config, section_order: order }, true);
			});
		});
	}

	_healthThresholdPairs() {
		return [
			["health_cpu_warning", "health_cpu_critical"],
			["health_memory_warning", "health_memory_critical"],
			["health_disk_warning", "health_disk_critical"],
			["health_database_warning", "health_database_critical"],
			["health_backup_size_warning", "health_backup_size_critical"],
			["health_updates_warning", "health_updates_critical"],
			["health_unavailable_warning", "health_unavailable_critical"],
			["health_database_variation_warning", "health_database_variation_critical"],
			["health_backup_variation_warning", "health_backup_variation_critical"],
		];
	}

	_thresholdPairFor(key) {
		return this._healthThresholdPairs().find(([warningKey, criticalKey]) => warningKey === key || criticalKey === key) || null;
	}

	_effectiveThresholdValue(config, key) {
		const value = Number(config?.[key] ?? HaServerHealthCardEditor.DEFAULTS[key]);
		return Number.isFinite(value) ? value : null;
	}

	_validateThresholdPair(config, pair, showMessage = true) {
		if (!pair) return true;
		const [warningKey, criticalKey] = pair;
		const warning = this._effectiveThresholdValue(config, warningKey);
		const critical = this._effectiveThresholdValue(config, criticalKey);
		const valid = warning == null || critical == null || warning < critical;
		for (const key of pair) this.querySelector(`[data-config="${key}"]`)?.closest(".number-field")?.classList.toggle("invalid", !valid);
		const criticalField = this.querySelector(`[data-config="${criticalKey}"]`)?.closest(".number-field");
		if (criticalField) {
			let message = criticalField.parentElement?.querySelector(`[data-threshold-error="${criticalKey}"]`);
			if (!message && showMessage) {
				message = document.createElement("div");
				message.className = "threshold-validation";
				message.dataset.thresholdError = criticalKey;
				message.textContent = this._t("editor.thresholdOrderError");
				criticalField.insertAdjacentElement("afterend", message);
			}
			message?.classList.toggle("visible", !valid && showMessage);
		}
		return valid;
	}
	_validateAllThresholds(config = this._config, showMessage = true) {
		return this._healthThresholdPairs().every((pair) => this._validateThresholdPair(config, pair, showMessage));
	}

	_updateValues() {
		if (!this._rendered || !this._config) return;
		this.querySelectorAll("[data-config]").forEach((element) => {
			const key = element.dataset.config;
			const value = this._config[key];
			if (element.tagName === "HA-SELECTOR") {
				element.hass = this._hass;
				element.value = value ?? HaServerHealthCardEditor.DEFAULTS[key] ?? "";
				return;
			}
			if (element.tagName === "HA-SWITCH") {
				element.checked = value ?? HaServerHealthCardEditor.DEFAULTS[key] ?? false;
				return;
			}
			if (document.activeElement !== element) element.value = value ?? "";
		});
		this._updateHealthAnalysisState();
	}

	_valueChanged(event) {
		const target = event.currentTarget;
		const key = target?.dataset?.config;
		if (!key) return;

		let value;
		if (target.tagName === "HA-SELECTOR") value = event.detail?.value ?? target.value ?? "";
		else if (target.tagName === "HA-SWITCH") value = Boolean(target.checked);
		else if (target.type === "number") value = target.value === "" ? "" : Number(target.value);
		else value = target.value;

		const config = { ...this._config, [key]: value };
		const defaultValue = HaServerHealthCardEditor.DEFAULTS[key];
		if (value === "" || value === undefined || value === defaultValue) delete config[key];
		const thresholdPair = this._thresholdPairFor(key);
		if (thresholdPair && !this._validateThresholdPair(config, thresholdPair, true)) return;
		this._emitConfig(config, key === "language");
		if (thresholdPair) this._validateThresholdPair(config, thresholdPair, false);
	}

	_emitConfig(config, rerender = false) {
		this._config = config;
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: { ...config } },
			bubbles: true,
			composed: true,
		}));
		if (!rerender) return;

		const openSections = [...this.querySelectorAll("details.section")]
			.map((details, index) => details.open ? index : -1)
			.filter((index) => index >= 0);
		this._rendered = false;
		this._render();
		this._rendered = true;
		this.querySelectorAll("details.section").forEach((details, index) => {
			details.open = openSections.includes(index);
		});
		this._updateValues();
	}

	_escape(value) {
		return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"'": "&#39;",
			'"': "&quot;",
		})[character]);
	}
}

/* ---------------------------------------------------------------------- */
/*  Registration                                                          */
/* ---------------------------------------------------------------------- */
if (!customElements.get("ha-server-health-card")) {
	customElements.define("ha-server-health-card", HaServerHealthCard);
}

if (!customElements.get("ha-server-health-card-editor")) {
	customElements.define("ha-server-health-card-editor", HaServerHealthCardEditor);
}

window.customCards = window.customCards || [];
window.customCards.push({
	type: "ha-server-health-card",
	name: "HA Server Health Card",
	description: "Home Assistant server health and system monitoring: CPU, memory, RAM, disk, storage, database, network, entities, updates, backups, HAOS and Supervisor.",
	preview: true,
	documentationURL: "https://github.com/KroFR/ha-server-health-card",
});

console.info( `%c ❤️‍🩹 HA SERVER HEALTH CARD %c v${CARD_VERSION} `, "color: white; background: #039be5; font-weight: 700;", "color: #039be5; background: white; font-weight: 700;" );
