(() => {
  const adventureName = 'Waterdeep - City of Splendors';
  const moduleName = 'Waterdeep-City-of-Splendors';

  /**
   * welcomeJournal (if set) will automatically be imported and opened after the first activation of a
   * scene imported from the module compendium.
   * The name here corresponds to a Journal entry in your compendium and must match exactly (it is case
   * sensitive).
   * Set to the following to disable:
   *   const welcomeJournal = '';
   */
  const welcomeJournal = '';
  
  /**
   * additionalJournals will automatically be imported. This is a list of Journals by name that should
   * also be imported.
   * Set to the following to disable:
   *   const additionalJournals = [];
   */
  const additionalJournals = [];
  
  /**
   * additionalMacros will automatically be imported. Each name must match exactly and are case sensitive.
   * Set to the following to disable:
   *   const additionalMacros = [];
   */
  const additionalMacros = [];
  
  /**
   * creaturePacks is a list of compendium packs to look in for Actors by name (in prioritised order).
   * If the creature is not found in the first pack, it will search through each subsequent pack.
   * The first entry here assumes that you have an Actor pack in your module with the "name" of "actors".
   * The second entry here lists the DnD5e SRD Monsters compendium that comes with the DnD5e system. Feel
   * free to delete the 'dnd5e.monsters' reference if you want, or swapping it to any other system compendium
   * reference.
   * Set to the following to disable:
   *   const creaturePacks = [];
   */
  const creaturePacks = [];
  
  /**
   * journalPacks is a list of compendium packs to look in for Journals by name (in prioritised order).
   * The first entry here assumes that you have a Journal pack in your module with the "name" of "journals".
   * Set to the following to disable:
   *   const journalPacks = [];
   */
  const journalPacks = ["waterdeep-city-of-splendors.journals"];
  
  /**
   * macroPacks is a list of compendium packs to look in for Macros by name (in prioritised order).
   * The first entry here assumes that you have a Macro pack in your module with the "name" of "macros".
   * Set to the following to disable:
   *   const macroPacks = [];
   */
  const macroPacks = [];
  
  /**
   * playlistPacks is a list of compendium packs to look in for Playlists by name (in prioritised order).
   * The first entry here assumes that you have a Playlist pack in your module with the "name" of "playlists".
   * Set to the following to disable:
   *   const playlistPacks = [];
   */
  const playlistPacks = [];
  
  /**
   * additionalModulePacks is a list of modules whose compendium packs can be looked in for entities by name (in prioritised order).
   * Enter just the "name" of the module/s or system/s you want to be considered.
   * For example, if you wanted to allow the packs from
   * the [Free Loot Tavern's Magic Item Vault]{@link https://foundryvtt.com/packages/free-loot-tavern-compendium}
   * and [Dynamic Active Effects SRD]{@link https://foundryvtt.com/packages/Dynamic-Effects-SRD}
   * modules to be searchable:
   *   const additionalModulePacks= ['free-loot-tavern-compendium', 'Dynamic-Effects-SRD'];
   * Set to the following to disable:
   *   const additionalModulePacks = [];
   */
  const additionalModulePacks = [];

  Hooks.once('scenePackerReady', ScenePacker => {
    // Initialise the Scene Packer with your adventure name and module name
    let packer = ScenePacker.Initialise({
      adventureName,
      moduleName,
      creaturePacks,
      journalPacks,
      macroPacks,
      playlistPacks,
      additionalModulePacks,
      welcomeJournal,
      additionalJournals,
      additionalMacros,
      allowImportPrompts: true, // Set to false if you don't want the initial popup
    });
  });
})();
