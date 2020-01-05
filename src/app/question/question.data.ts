
let data = {
  "java": {
    "1": {
      title: "Basic I/O - Console",
      questions: [
        {
          type: "mc",
          question: `Which of the following is the correct package import statement so that the following line <br />
<pre>
Scanner scanner = new Scanner(System.in);
</pre>
can compile without error?`,
          options: [
            "import java/util/Scanner",
            "import java.util;",
            "import java.util.Scanner;",
            "import util/Scanner",
            "import java.io.Scanner;",
            "import java/io/Scanner",
            "import java.io.scanner"
          ],
          answer: 2
        }, {
          type: "fill",
          question: `given <pre>
import java.util.Scanner; // Import the Scanner class to read text files

public class ReadFile {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String line;
    do{
      line = scanner.nextLine();
      ___________________;
    } while(!line.isEmpty());
    scanner.close();
  }
}</pre>
what should be filled in '______________' to print whole user input line-by-line (which terminate at empty line)?`,
          answer: "System.out.println(line);"
        }, {
          type: "mcma",
          question: `Which of the following declaration(s) of object <code>readFromConsole</code> that allows you to read from <code>System.in</code>? (given with the required correct package import)`,
          options: [
            "BufferedReader readFromConsole = new BufferedReader(new InputStreamReader(System.in));",
            "Scanner readFromConsole = Scanner.readFrom(System.in);",
            "readFromConsole = BuffereReader(System.in);",
            "BufferedReader readFromConsole = new BufferedReader(new Scanner.readFrom(java.io.System.in));",
            "Scanner readFromConsole = new Scanner(System.in);",
            "readFromConsole = Scanner(System.in)"
          ],
          answer: [0, 4]
        }, {
          type: "mc",
          question: `what is the expected output after running the main function?<br />
<pre>public class Main
{
  public static void main(String args[]){
    int a = 5;
    System.out.print(a);
    a += 2;
    System.out.print(a);
    a += 3;
  }
}</pre>`,
          options: [
            `<pre>5
7</pre>`,
            "<pre>10</pre>",
            `<pre>7
10</pre>`,
            "<pre>57</pre>",
            "compile error"
          ],
          answer: 3
        }, {
          type: "mc",
          question: `what is the expected output of the following program?<br />
<pre>public class Main
{
  public static void main(String args[]){
    int arr[] = { 1, 2, 3 };
    for(int i = 0; i < arr.length; ++i){
      System.out.print(arr[i]);
    }
  }
}</pre>`,
          options: [
            `<pre>1
2
3</pre>`,
            "<pre>123</pre>",
            `<pre>321</pre>`,
            "<pre>1 2 3</pre>",
            "compile error"
          ],
          answer: 0
        }
      ]
    },
    "2": {
      title: "Basic I/O - File",
      questions: [
        {
          type: "mc",
          question: `Which of the following is the correct import statement for class <code>File</code>?`,
          options: [
            "import java/util/File",
            "import java.util;",
            "import java.util.File;",
            "import util/File",
            "import java.io.File;",
            "import java/io/File",
            "import java.util.file"
          ],
          answer: 4
        }, {
          type: "fill",
          question: `given <pre>import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files

public class ReadFile {
  public static void main(String[] args) {
    try {
      File myObj = new File("data.txt");
      Scanner myReader = new Scanner(myObj);
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        ___________________;
      }
      myReader.close();
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}</pre>
what should be filled in '______________' to print the whole file in console line-by-line?`,
          answer: "System.out.println(data);"
        }
      ]
    }
  },
  "cpp": {

  },
  "python": {

  }
};
console.log(JSON.stringify(data, null, 2));

export default data;