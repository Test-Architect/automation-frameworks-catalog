import dotenv from "dotenv";

class ConfigManager {
    private static prefix: string;

    // Initialize on first import
    static {
        dotenv.config(); // Load .env variables into process.env
        const env = (process.env.TEST_ENV || "DEV").toUpperCase();
        ConfigManager.prefix = `${env.trim()}_`;
    }

    public static get(key: string): string {

        const fullKey = `${this.prefix}${key}`;
        const value = process.env[fullKey];
        if (!value) {
            throw new Error(`❌ Missing environment variable: ${fullKey}`);
        }
        return value;
    }
}

export default ConfigManager;