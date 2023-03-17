import * as fs from 'fs';
import { faker } from '@faker-js/faker';

function generateID() {
    let id = "";
    for (let i = 0; i < 11; i++) {
      id += Math.floor(Math.random() * 10);
    }
    return id;
  }
    
  const disciplinas = [
    'Biomedicina',
    'Ciências Biológicas',
    'Ciências Biológicas',
    'Educação Física',
    'Educação Física',
    'Enfermagem',
    'Farmácia',
    'Fisioterapia',
    'Arquitetura e Urbanismo',
    'Ciência de dados e Inteligência Artificial',
    'Engenharia Ambiental e Sanitária',
    'Engenharia Biomédica',
    'Engenharia Civil',
    'Engenharia de Computação',
    'Engenharia de Controle e Automação',
    'Engenharia de Produção'

  ]

  const year = 2023;
  let students = [];
  
  for (let i = 0; i < 5000; i++) {
    let id = generateID();
    while (students.some(student => student.id === id)) {
      id = generateID();
    }
    let name = faker.name.fullName();
    let ano = year;
    let disciplina = disciplinas[Math.floor(Math.random() * disciplinas.length)];
    students.push({ id, name, ano, disciplina });
  }

fs.writeFileSync('students.json', JSON.stringify(students, null, 2));

console.log(`Successfully generated ${numStudents} students and saved them to students.json`);
