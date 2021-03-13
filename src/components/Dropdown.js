function Dropdown({selectedLang, updateLang, langCodes}) {
    const handleChange = (e) => {
        const lang = langCodes.filter((langCode) => langCode.language === e.target.value);
        updateLang(lang[0]);
    }
    
    return (
        <select className="dropdown" onChange={handleChange} value={selectedLang.language}>
            {langCodes.map((lang) => (
                <option value={lang.language}>
                    {lang.name}
                </option>
            ))}
        </select>
    )
}
export default Dropdown;