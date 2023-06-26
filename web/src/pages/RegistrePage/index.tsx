import "./styles.css";
import PageHeader from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import warningIcon from "../../assets/images/icons/warning.svg";
import { useState, useEffect, FormEvent } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface CourseItem {
  name_course: string;
  shift: string;
}

const RegistreForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [number_register, setNumberRegister] = useState("");
  const [finish_course, setFinishCourse] = useState("");
  const [courseItems, setCourseItems] = useState<CourseItem[]>([
    { name_course: "", shift: "" },
  ]);

  function handleAddNewCourseItem() {
    setCourseItems([
      ...courseItems,
      {
        name_course: "",
        shift: "",
      },
    ]);
  }

  function handleCourseChange(
    index: number,
    field: keyof CourseItem,
    value: string
  ) {
    const updatedCourseItems = courseItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });

    setCourseItems(updatedCourseItems);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post("/users", {
        name,
        cpf,
        rg,
        avatar,
        whatsapp,
        number_register,
        finish_course,
        course: {
          name_course: courseItems.map((item) => item.name_course),
          shift: courseItems.map((item) => item.shift),
        },
      });

      alert("Usuário cadastrado com sucesso!");

      navigate("/");
    } catch (error) {
      alert("Erro no cadastro: Verifique as informações corretamente");
    }
  }

  return (
    <div id="page-registre-form" className="container">
      <PageHeader
        title="Seu aliado na construção de um futuro educacional seguro."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome"
              place="   (Nome Completo)"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="cpf"
              label="CPF"
              maxLength={12}
              place="   (somente numeros)"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
            <Input
              name="rg"
              label="RG"
              maxLength={11}
              place="   (somente numeros)"
              value={rg}
              onChange={(e) => {
                setRg(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="whatsapp"
              maxLength={13}
              place="   (somente numeros)"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Link da sua foto"
              place="   (comece com http://)"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="registreNumber"
              label="Nº Matricula"
              maxLength={13}
              place="   (somente numeros)"
              value={number_register}
              onChange={(e) => {
                setNumberRegister(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Sobre o curso
              <button type="button" onClick={handleAddNewCourseItem}>
                + Novo Curso
              </button>
            </legend>
            {courseItems.map((item, index) => (
              <div key={index} className="course-item">
                <Select
                  name="course"
                  label="Curso"
                  value={item.name_course}
                  onChange={(e) =>
                    handleCourseChange(index, "name_course", e.target.value)
                  }
                  options={[
                    { id: "0", label: "Técnico em Informática" },
                    { id: "1", label: "Técnico em Redes de Computadores" },
                    {id: "2",label: "Técnico em Programação de Jogos Digitais",},
                    { id: "3", label: "Técnico em Design Gráfico" },
                    { id: "4", label: "Técnico em Administração" },
                    { id: "5", label: "Técnico em Contabilidade" },
                    { id: "6", label: "Técnico em Eletrônica" },
                    { id: "7", label: "Técnico em Mecatrônica" },
                    { id: "8", label: "Técnico em Automação Industrial" },
                    { id: "9", label: "Técnico em Eletricidade" },
                    { id: "10", label: "Técnico em Telecomunicações" },
                    { id: "11", label: "Técnico em Segurança do Trabalho" },
                    { id: "12", label: "Técnico em Enfermagem" },
                    { id: "13", label: "Técnico em Radiologia" },
                    { id: "14", label: "Técnico em Estética" },
                    { id: "15", label: "Técnico em Nutrição e Dietética" },
                    { id: "16", label: "Técnico em Farmácia" },
                    { id: "17", label: "Técnico em Análises Clínicas" },
                    { id: "18", label: "Técnico em Meio Ambiente" },
                    { id: "19", label: "Técnico em Agropecuária" },
                    { id: "20", label: "Técnico em Teatro e Expressão Vocal" },
                    { id: "21", label: "Técnico em Artes Dramáticas" },
                    { id: "22", label: "Técnico em Cenografia" },
                    { id: "23", label: "Técnico em Iluminação Cênica" },
                    { id: "24", label: "Técnico em Maquiagem Cênica" },
                    { id: "25", label: "Técnico em Figurino Cênico" },
                    { id: "26", label: "Técnico em Direção Teatral" },
                    { id: "27", label: "Técnico em Sonorização" },
                    { id: "28", label: "Técnico em Comunicação Visual" },
                    { id: "29", label: "Técnico em Processos Fotográficos" },
                    { id: "30", label: "Técnico em Produção de Áudio e Vídeo" },
                  ]}
                />
		 <div className="course-items">
                <Select
                  name="shift"
                  label="Turno"
                  value={item.shift}
                  onChange={(e) =>
                    handleCourseChange(index, "shift", e.target.value)
                  }
                  options={[
                    { id: "0", label: "Manhã" },
                    { id: "1", label: "Tarde" },
                    { id: "2", label: "Noite" },
                  ]}
                />
                
                <Input
                  name="finish"
                  label="Final do curso"
                  value={finish_course}
                  onChange={(e) => {
                  setFinishCourse(e.target.value);
                  }}
                />
                </div>
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              <b>
                Importante ! <br />
                Preencha todos os dados.
                <br />
                Verifique seu número de matrícula. <br />
                no formulário de inscrição <br />
                ou dirija-se até a direção.
              </b>
            </p>

            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default RegistreForm;
