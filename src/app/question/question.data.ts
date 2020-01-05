

export default {
  "java": {
    "1": {
      title: "Basic I/O - Console",
      questions: [
        {
          type: "mc",
          question: `Which of the following is the correct package import statement so that <br />
<pre>
    File file = new File("a.txt");
</pre>
can compile without error?`,
          options: [
            "import java/io/File",
            "import java.io;",
            "import java.io.File;",
            "import io/File"
          ],
          answer: 2
        }, {
          type: "mcma",
          question: `Which of the following declaration(s) of object <code>readFromConsole</code> that allows you to read from <code>System.in</code>? (given with the correct package import)`,
          options: [
            "BufferedReader readFromConsole = new BufferedReader(new InputStreamReader(System.in));",
            "Scanner readFromConsole = Scanner.readFrom(System.in);",
            "readFromConsole = BuffereReader(System.in);",
            "BufferedReader readFromConsole = new BufferedReader(new Scanner.readFrom(java.io.System.in));",
            "Scanner readFromConsole = new Scanner(System.in);",
            "readFromConsole = Scanner(System.in)"
          ],
          answer: 0
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

        }
      ]
    }
  },
  "cpp": {

  },
  "python": {

  }
}