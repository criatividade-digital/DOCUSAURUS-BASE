import sys
import re
from colorama import init, Fore, Style

# Inicializa o colorama
init(autoreset=True)

def substituir_texto(file_path, search_text, replace_text):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Verifica se o texto de busca está presente no conteúdo original
        if search_text in content:
            print(f"Texto '{search_text}' encontrado no arquivo.")
        else:
            print(Fore.RED + f"Texto '{search_text}' não encontrado no arquivo.")
        
        # Substitui o texto
        new_content = content.replace(search_text, replace_text)
        
        # Verifica se a substituição foi realizada
        if new_content != content:
            print(f"Texto '{search_text}' substituído por '{replace_text}'.")
        else:
            print(Fore.RED + f"Texto '{search_text}' não foi substituído.")
        
        # Grava o novo conteúdo de volta no arquivo
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print("Processo de substituição concluído.")
    except FileNotFoundError:
        print(Fore.RED + f"Arquivo não encontrado: {file_path}")
    except Exception as e:
        print(Fore.RED + f"Ocorreu um erro: {e}")

def excluir_texto(file_path, tag, replace_text):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Define o padrão regex para encontrar o conteúdo dentro da tag
        pattern = re.compile(f"{re.escape(tag)}(.*?){re.escape(tag.replace('<', '</'))}", re.DOTALL)
        
        # Verifica se a tag está presente no conteúdo original
        if pattern.search(content):
            print(f"Tag '{tag}' encontrada no arquivo.")
        else:
            print(Fore.RED + f"Tag '{tag}' não encontrada no arquivo.")
        
        # Substitui o conteúdo da tag pelo replace_text ou exclui se replace_text for '##excluir##'
        if replace_text == '##excluir##':
            new_content = pattern.sub('', content)
            print(f"Conteúdo dentro da tag '{tag}' foi excluído.")
        else:
            new_content = pattern.sub(replace_text, content)
            print(f"Conteúdo dentro da tag '{tag}' foi substituído por '{replace_text}'.")
        
        # Grava o novo conteúdo de volta no arquivo
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print("Processo de exclusão/substituição concluído.")
    except FileNotFoundError:
        print(Fore.RED + f"Arquivo não encontrado: {file_path}")
    except Exception as e:
        print(Fore.RED + f"Ocorreu um erro: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print(Fore.RED + "Uso: python gerar_docs_curso_troca_texto.py <file_path> <search_text> <replace_text> [TAG]")
    else:
        file_path = sys.argv[1]
        search_text = sys.argv[2]
        replace_text = sys.argv[3]
        
        if len(sys.argv) == 5 and sys.argv[4] == 'TAG':
            excluir_texto(file_path, search_text, replace_text)
        else:
            substituir_texto(file_path, search_text, replace_text)