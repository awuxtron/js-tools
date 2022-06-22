import type { SourceCodeTransformer } from '@unocss/core'
import Renamer from './renamer'

export interface RenameClassOptions {
    trigger?: string
    classPrefix?: string
    renameFn?: (className: string) => string
    layer?: string
}

export default function transformerRenameClass(options: RenameClassOptions = {}): SourceCodeTransformer {
    let { trigger = ':css:', classPrefix, renameFn, layer } = options

    if (!renameFn) {
        const renamer = new Renamer()

        renameFn = renamer.rename
    }

    return {
        name: 'transformer-rename-class',
        enforce: 'pre',
        transform(sourceCode) {
            console.log(sourceCode)
        },
    }
}
