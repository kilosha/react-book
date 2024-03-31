const getMode = (modes) => {
    const mode = `${localStorage?.getItem('mode')}`; // проверяет тему в localStorage
    if (Object.values(modes).includes(mode)) return mode;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)'); // проверяет тему пользователя в ОС (light)
    if (userMedia.matches) return modes.light;

    return modes.dark;
}

export default getMode;