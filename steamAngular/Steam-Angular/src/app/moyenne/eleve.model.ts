export class eleve{
  static matieres = ['Francais','Maths', 'Geo'];

  nom;
  notes;
  moyenne;

  constructor(nom,notes){
    this.nom = nom;

    this.notes = notes;

    this.calculMoyenne();
}

    calculMoyenne() {
      let somme = 0;

      for(let matiere of Object.keys(this.notes)){
        let note = parseInt(this.notes[matiere]);

        somme += note;
      }

      this.moyenne = somme/Object.keys(this.notes).length;
      }

}
