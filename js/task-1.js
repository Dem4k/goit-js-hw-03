function slugify(title) {
    let slug = title.toLowerCase();
    slug = slug.split(/\s+/);
    return slug.join('-');
}

