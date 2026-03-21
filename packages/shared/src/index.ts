export * from './infra/mappers/common.mapper.js';
export * from './domain/event-tag.enum.js';

export const helloWorld = () => {
    return "Hello, World!";
};

/**
 * Utility to check if a value is not null or undefined
 */
export const isDefined = <T>(value: T | undefined | null): value is T => {
    return value !== undefined && value !== null;
};
