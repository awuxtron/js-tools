const START_CHARS = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']
const CHARS = [...START_CHARS, ...'0123456789_']

/**
 * @link https://github.com/google/postcss-rename/blob/master/src/minimal-renamer.ts
 */
export default class Renamer {
    private index = 0
    private readonly names = new Map<string, string>()

    rename(name: string): string {
        let shortName = this.names.get(name)

        if (shortName) {
            return shortName
        }

        this.names.set(name, (shortName = this.short(this.index++)))

        return shortName
    }

    short(index: number): string {
        const result = [START_CHARS[index % START_CHARS.length]]

        if (index < START_CHARS.length) {
            return result.join('')
        }

        index = Math.floor(index / START_CHARS.length) - 1

        // eslint-disable-next-line no-constant-condition
        while (true) {
            result.push(CHARS[index % CHARS.length])

            if (index < CHARS.length) {
                break
            }

            index = Math.floor(index / CHARS.length) - 1
        }

        return result.join('')
    }
}
