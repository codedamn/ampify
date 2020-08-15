declare module 'ampify' {
	export = ampify
}

declare function ampify(html: string, options?: IOptions): string

interface IOptions {
	cwd?: string
	round?: boolean
}
