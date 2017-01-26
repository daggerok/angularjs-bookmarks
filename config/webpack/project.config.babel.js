import project from '../../package.json';

export default project;

export const profile = ((process || {}).env || {}).NODE_ENV || '';
export const isProd = 'production' === profile;
export const isGhpages = 'ghpages' === profile;
export const isProdOrGhpages = isProd || isGhpages;
