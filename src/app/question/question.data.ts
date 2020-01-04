

export default {
  "java": {
    "1": {
      title: "Basic I/O",
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
          type: "mc",
          question: `Which of the following declaration of object <code>readFromConsole</code> that allows you to read from <code>System.in</code>? (given with the correct package import)`,
          options: [
            "BufferedReader readFromConsole = new BufferedReader(new InputStreamReader(System.in));",
            "Scanner readFromConsole = Scanner.readFrom(System.in);",
            "readFromConsole = BuffereReader(System.in);",
            "BufferedReader readFromConsole = new BufferedReader(new Scanner.readFrom(java.io.System.in));"
          ],
          answer: 0
        }
      ]
    }
  },
  "cpp": {

  },
  "python": {

  }
}