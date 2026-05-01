export interface Project {
    id: number;
    name: string;
    description: string;
    image: ImageMetadata;
    tech: string[];
    link?: string;
    code: string;
}
