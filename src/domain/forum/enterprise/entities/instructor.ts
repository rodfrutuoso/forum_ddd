import { Entity } from "../../../core/entities/entity";
import { UniqueEntityID } from "../../../core/entities/unique-entity-id";

interface InstructorProps {
  nome: string;
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityID) {
    const instructor = new Instructor(props, id);

    return instructor;
  }

  get nome() {
    return this.props.nome;
  }

}
