export interface Page
{
    icon?: any;
    name: string;
    url: string;
}

export interface Project
{
    name: string;
    type: string;
    slug: string;
    tagline: string;
    description: string;
    thumbnail: string;

    engine: string;
    genre: string;
    platform: string;
    website?: string;
    release: string;
    devlog: string | false;
}