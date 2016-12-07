// Type: PasswordOfTheDay.MainForm
// Assembly: ARRISpwod, Version=1.0.2580.24511, Culture=neutral, PublicKeyToken=null
// MVID: D585FC9B-F292-4019-8A4B-FB28929CA3AF
// Assembly location: C:\Documents and Settings\Eu Todo\Desktop\ARRISpwod\ARRISpwod.exe

using Microsoft.VisualBasic;
using Microsoft.VisualBasic.CompilerServices;
using PasswordOfTheDay.My;
using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Resources;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Windows.Forms;

namespace PasswordOfTheDay
{
  public class MainForm : Form
  {
    private string DESseed;
    private string seedeight;
    private string seedten;
    private string defseed;
    private DateTime begindate;
    private DateTime enddate;
    private byte[] desKey;
    private byte[] desIV;
    private int DES_file_number;
    private string DES_file_name;
    private int DES_file_buffer_len;
    private string DES_file_string_bytes;
    private int temp_file_number;
    private string temp_file_name;
    private int temp_file_buffer_len;
    private int i;
    private long longi;
    private bool manualEnter;
    private int numOfPwd;
    private string passwordFile;
    private IContainer components;
    [AccessedThroughProperty("SeedBox")]
    private TextBox _SeedBox;
    [AccessedThroughProperty("DESBox")]
    private TextBox _DESBox;
    [AccessedThroughProperty("SeedLabel")]
    private Label _SeedLabel;
    [AccessedThroughProperty("DESLabel")]
    private Label _DESLabel;
    [AccessedThroughProperty("CalculateButton")]
    private Button _CalculateButton;
    [AccessedThroughProperty("PasswordOfTheDayLabel")]
    private Label _PasswordOfTheDayLabel;
    [AccessedThroughProperty("PasswordOfTheDayTextBox")]
    private TextBox _PasswordOfTheDayTextBox;
    [AccessedThroughProperty("BeginDateLabel")]
    private Label _BeginDateLabel;
    [AccessedThroughProperty("EndLabel")]
    private Label _EndLabel;
    [AccessedThroughProperty("GroupBox")]
    private GroupBox _GroupBox;
    [AccessedThroughProperty("BeginDateTimePicker")]
    private DateTimePicker _BeginDateTimePicker;
    [AccessedThroughProperty("EndDateTimePicker")]
    private DateTimePicker _EndDateTimePicker;
    [AccessedThroughProperty("SeedCheckBox")]
    private CheckBox _SeedCheckBox;
    [AccessedThroughProperty("SaveSeedCheckBox")]
    private CheckBox _SaveSeedCheckBox;
    [AccessedThroughProperty("Label1")]
    private Label _Label1;
    [AccessedThroughProperty("numberOfPwdTextBox")]
    private TextBox _numberOfPwdTextBox;
    [AccessedThroughProperty("Panel1")]
    private Panel _Panel1;
    [AccessedThroughProperty("GroupBox1")]
    private GroupBox _GroupBox1;
    [AccessedThroughProperty("RichTextBox")]
    private RichTextBox _RichTextBox;
    [AccessedThroughProperty("Panel2")]
    private Panel _Panel2;
    [AccessedThroughProperty("passwordContextMenu")]
    private ContextMenu _passwordContextMenu;
    [AccessedThroughProperty("copyAllMenuItem")]
    private MenuItem _copyAllMenuItem;
    [AccessedThroughProperty("Label2")]
    private Label _Label2;
    [AccessedThroughProperty("pathTextBox")]
    private TextBox _pathTextBox;
    [AccessedThroughProperty("browseButton")]
    private Button _browseButton;
    [AccessedThroughProperty("saveFileDialog")]
    private SaveFileDialog _saveFileDialog;

    internal virtual TextBox SeedBox
    {
      get
      {
        return this._SeedBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._SeedBox != null)
          this._SeedBox.TextChanged -= new EventHandler(this.SeedBox_TextChanged);
        this._SeedBox = value;
        if (this._SeedBox == null)
          return;
        this._SeedBox.TextChanged += new EventHandler(this.SeedBox_TextChanged);
      }
    }

    internal virtual TextBox DESBox
    {
      get
      {
        return this._DESBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._DESBox = value;
      }
    }

    internal virtual Label SeedLabel
    {
      get
      {
        return this._SeedLabel;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._SeedLabel = value;
      }
    }

    internal virtual Label DESLabel
    {
      get
      {
        return this._DESLabel;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._DESLabel = value;
      }
    }

    internal virtual Button CalculateButton
    {
      get
      {
        return this._CalculateButton;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._CalculateButton != null)
          this._CalculateButton.Click -= new EventHandler(this.CalculateButton_Click);
        this._CalculateButton = value;
        if (this._CalculateButton == null)
          return;
        this._CalculateButton.Click += new EventHandler(this.CalculateButton_Click);
      }
    }

    internal virtual Label PasswordOfTheDayLabel
    {
      get
      {
        return this._PasswordOfTheDayLabel;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._PasswordOfTheDayLabel != null)
          this._PasswordOfTheDayLabel.Click -= new EventHandler(this.PasswordOfTheDayLabel_Click);
        this._PasswordOfTheDayLabel = value;
        if (this._PasswordOfTheDayLabel == null)
          return;
        this._PasswordOfTheDayLabel.Click += new EventHandler(this.PasswordOfTheDayLabel_Click);
      }
    }

    internal virtual TextBox PasswordOfTheDayTextBox
    {
      get
      {
        return this._PasswordOfTheDayTextBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._PasswordOfTheDayTextBox != null)
          this._PasswordOfTheDayTextBox.TextChanged -= new EventHandler(this.PasswordOfTheDayTextBox_TextChanged);
        this._PasswordOfTheDayTextBox = value;
        if (this._PasswordOfTheDayTextBox == null)
          return;
        this._PasswordOfTheDayTextBox.TextChanged += new EventHandler(this.PasswordOfTheDayTextBox_TextChanged);
      }
    }

    internal virtual Label BeginDateLabel
    {
      get
      {
        return this._BeginDateLabel;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._BeginDateLabel = value;
      }
    }

    internal virtual Label EndLabel
    {
      get
      {
        return this._EndLabel;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._EndLabel = value;
      }
    }

    internal virtual GroupBox GroupBox
    {
      get
      {
        return this._GroupBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._GroupBox != null)
          this._GroupBox.Enter -= new EventHandler(this.GroupBox_Enter);
        this._GroupBox = value;
        if (this._GroupBox == null)
          return;
        this._GroupBox.Enter += new EventHandler(this.GroupBox_Enter);
      }
    }

    internal virtual DateTimePicker BeginDateTimePicker
    {
      get
      {
        return this._BeginDateTimePicker;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._BeginDateTimePicker != null)
        {
          this._BeginDateTimePicker.ValueChanged -= new EventHandler(this.BeginDateTimePicker_ValueChanged);
          this._BeginDateTimePicker.CloseUp -= new EventHandler(this.BeginDateTimePicker_CloseUp);
        }
        this._BeginDateTimePicker = value;
        if (this._BeginDateTimePicker == null)
          return;
        this._BeginDateTimePicker.ValueChanged += new EventHandler(this.BeginDateTimePicker_ValueChanged);
        this._BeginDateTimePicker.CloseUp += new EventHandler(this.BeginDateTimePicker_CloseUp);
      }
    }

    internal virtual DateTimePicker EndDateTimePicker
    {
      get
      {
        return this._EndDateTimePicker;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._EndDateTimePicker != null)
          this._EndDateTimePicker.CloseUp -= new EventHandler(this.EndDateTimePicker_CloseUp);
        this._EndDateTimePicker = value;
        if (this._EndDateTimePicker == null)
          return;
        this._EndDateTimePicker.CloseUp += new EventHandler(this.EndDateTimePicker_CloseUp);
      }
    }

    internal virtual CheckBox SeedCheckBox
    {
      get
      {
        return this._SeedCheckBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._SeedCheckBox != null)
          this._SeedCheckBox.CheckedChanged -= new EventHandler(this.SeedCheckBox_CheckedChanged);
        this._SeedCheckBox = value;
        if (this._SeedCheckBox == null)
          return;
        this._SeedCheckBox.CheckedChanged += new EventHandler(this.SeedCheckBox_CheckedChanged);
      }
    }

    internal virtual CheckBox SaveSeedCheckBox
    {
      get
      {
        return this._SaveSeedCheckBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._SaveSeedCheckBox != null)
          this._SaveSeedCheckBox.CheckedChanged -= new EventHandler(this.SaveSeedCheckBox_CheckedChanged);
        this._SaveSeedCheckBox = value;
        if (this._SaveSeedCheckBox == null)
          return;
        this._SaveSeedCheckBox.CheckedChanged += new EventHandler(this.SaveSeedCheckBox_CheckedChanged);
      }
    }

    internal virtual Label Label1
    {
      get
      {
        return this._Label1;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._Label1 = value;
      }
    }

    internal virtual TextBox numberOfPwdTextBox
    {
      get
      {
        return this._numberOfPwdTextBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._numberOfPwdTextBox != null)
          this._numberOfPwdTextBox.KeyPress -= new KeyPressEventHandler(this.numberOfPwdTextBox_KeyPress);
        this._numberOfPwdTextBox = value;
        if (this._numberOfPwdTextBox == null)
          return;
        this._numberOfPwdTextBox.KeyPress += new KeyPressEventHandler(this.numberOfPwdTextBox_KeyPress);
      }
    }

    internal virtual Panel Panel1
    {
      get
      {
        return this._Panel1;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._Panel1 = value;
      }
    }

    internal virtual GroupBox GroupBox1
    {
      get
      {
        return this._GroupBox1;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._GroupBox1 = value;
      }
    }

    internal virtual RichTextBox RichTextBox
    {
      get
      {
        return this._RichTextBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._RichTextBox = value;
      }
    }

    internal virtual Panel Panel2
    {
      get
      {
        return this._Panel2;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._Panel2 != null)
          this._Panel2.Paint -= new PaintEventHandler(this.Panel2_Paint);
        this._Panel2 = value;
        if (this._Panel2 == null)
          return;
        this._Panel2.Paint += new PaintEventHandler(this.Panel2_Paint);
      }
    }

    internal virtual ContextMenu passwordContextMenu
    {
      get
      {
        return this._passwordContextMenu;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._passwordContextMenu = value;
      }
    }

    internal virtual MenuItem copyAllMenuItem
    {
      get
      {
        return this._copyAllMenuItem;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._copyAllMenuItem != null)
          this._copyAllMenuItem.Click -= new EventHandler(this.copyAllMenuItem_Click);
        this._copyAllMenuItem = value;
        if (this._copyAllMenuItem == null)
          return;
        this._copyAllMenuItem.Click += new EventHandler(this.copyAllMenuItem_Click);
      }
    }

    internal virtual Label Label2
    {
      get
      {
        return this._Label2;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._Label2 = value;
      }
    }

    internal virtual TextBox pathTextBox
    {
      get
      {
        return this._pathTextBox;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._pathTextBox = value;
      }
    }

    internal virtual Button browseButton
    {
      get
      {
        return this._browseButton;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        if (this._browseButton != null)
          this._browseButton.Click -= new EventHandler(this.browseButton_Click);
        this._browseButton = value;
        if (this._browseButton == null)
          return;
        this._browseButton.Click += new EventHandler(this.browseButton_Click);
      }
    }

    internal virtual SaveFileDialog saveFileDialog
    {
      get
      {
        return this._saveFileDialog;
      }
      [MethodImpl(MethodImplOptions.Synchronized)] set
      {
        this._saveFileDialog = value;
      }
    }

    public MainForm()
    {
      this.Load += new EventHandler(this.MainForm_Load);
      this.defseed = "MPSJKMDHAI";
      this.desKey = new byte[8];
      this.desIV = new byte[8];
      this.DES_file_string_bytes = Strings.Space(8);
      this.manualEnter = false;
      this.numOfPwd = 0;
      this.passwordFile = "PasswordOfTheDay.txt";
      this.InitializeComponent();
    }

    [STAThread]
    public static void Main()
    {
      Application.Run((Form) MyProject.Forms.MainForm);
    }

    protected override void Dispose(bool disposing)
    {
      if (disposing && this.components != null)
        this.components.Dispose();
      base.Dispose(disposing);
    }

    [DebuggerStepThrough]
    private void InitializeComponent()
    {
      ResourceManager resourceManager = new ResourceManager(typeof (MainForm));
      this.SeedBox = new TextBox();
      this.DESBox = new TextBox();
      this.SeedLabel = new Label();
      this.DESLabel = new Label();
      this.CalculateButton = new Button();
      this.PasswordOfTheDayLabel = new Label();
      this.PasswordOfTheDayTextBox = new TextBox();
      this.BeginDateTimePicker = new DateTimePicker();
      this.EndDateTimePicker = new DateTimePicker();
      this.BeginDateLabel = new Label();
      this.EndLabel = new Label();
      this.GroupBox = new GroupBox();
      this.SeedCheckBox = new CheckBox();
      this.SaveSeedCheckBox = new CheckBox();
      this.Label1 = new Label();
      this.numberOfPwdTextBox = new TextBox();
      this.Panel1 = new Panel();
      this.GroupBox1 = new GroupBox();
      this.RichTextBox = new RichTextBox();
      this.passwordContextMenu = new ContextMenu();
      this.copyAllMenuItem = new MenuItem();
      this.Panel2 = new Panel();
      this.Label2 = new Label();
      this.pathTextBox = new TextBox();
      this.browseButton = new Button();
      this.saveFileDialog = new SaveFileDialog();
      this.Panel1.SuspendLayout();
      this.GroupBox1.SuspendLayout();
      this.Panel2.SuspendLayout();
      this.SuspendLayout();
      TextBox seedBox1 = this.SeedBox;
      Point point1 = new Point(112, 16);
      Point point2 = point1;
      seedBox1.Location = point2;
      this.SeedBox.MaxLength = 8;
      this.SeedBox.Name = "SeedBox";
      this.SeedBox.PasswordChar = '*';
      TextBox seedBox2 = this.SeedBox;
      Size size1 = new Size(160, 20);
      Size size2 = size1;
      seedBox2.Size = size2;
      this.SeedBox.TabIndex = 0;
      this.SeedBox.Text = "";
      TextBox desBox1 = this.DESBox;
      point1 = new Point(112, 96);
      Point point3 = point1;
      desBox1.Location = point3;
      this.DESBox.Name = "DESBox";
      TextBox desBox2 = this.DESBox;
      size1 = new Size(160, 20);
      Size size3 = size1;
      desBox2.Size = size3;
      this.DESBox.TabIndex = 1;
      this.DESBox.Text = "";
      Label seedLabel1 = this.SeedLabel;
      point1 = new Point(8, 16);
      Point point4 = point1;
      seedLabel1.Location = point4;
      this.SeedLabel.Name = "SeedLabel";
      Label seedLabel2 = this.SeedLabel;
      size1 = new Size(96, 16);
      Size size4 = size1;
      seedLabel2.Size = size4;
      this.SeedLabel.TabIndex = 2;
      this.SeedLabel.Text = "Seed";
      Label desLabel1 = this.DESLabel;
      point1 = new Point(8, 96);
      Point point5 = point1;
      desLabel1.Location = point5;
      this.DESLabel.Name = "DESLabel";
      Label desLabel2 = this.DESLabel;
      size1 = new Size(96, 16);
      Size size5 = size1;
      desLabel2.Size = size5;
      this.DESLabel.TabIndex = 3;
      this.DESLabel.Text = "DES encoded seed";
      Button calculateButton1 = this.CalculateButton;
      point1 = new Point(64, 256);
      Point point6 = point1;
      calculateButton1.Location = point6;
      this.CalculateButton.Name = "CalculateButton";
      Button calculateButton2 = this.CalculateButton;
      size1 = new Size(168, 23);
      Size size6 = size1;
      calculateButton2.Size = size6;
      this.CalculateButton.TabIndex = 4;
      this.CalculateButton.Text = "Calculate Password of the Day";
      this.PasswordOfTheDayLabel.Font = new Font("Tahoma", 8f, FontStyle.Bold);
      Label passwordOfTheDayLabel1 = this.PasswordOfTheDayLabel;
      point1 = new Point(22, 296);
      Point point7 = point1;
      passwordOfTheDayLabel1.Location = point7;
      this.PasswordOfTheDayLabel.Name = "PasswordOfTheDayLabel";
      Label passwordOfTheDayLabel2 = this.PasswordOfTheDayLabel;
      size1 = new Size(120, 16);
      Size size7 = size1;
      passwordOfTheDayLabel2.Size = size7;
      this.PasswordOfTheDayLabel.TabIndex = 6;
      this.PasswordOfTheDayLabel.Text = "Password of the Day";
      TextBox passwordOfTheDayTextBox1 = this.PasswordOfTheDayTextBox;
      point1 = new Point(150, 296);
      Point point8 = point1;
      passwordOfTheDayTextBox1.Location = point8;
      this.PasswordOfTheDayTextBox.Name = "PasswordOfTheDayTextBox";
      TextBox passwordOfTheDayTextBox2 = this.PasswordOfTheDayTextBox;
      size1 = new Size(120, 20);
      Size size8 = size1;
      passwordOfTheDayTextBox2.Size = size8;
      this.PasswordOfTheDayTextBox.TabIndex = 5;
      this.PasswordOfTheDayTextBox.Text = "";
      DateTimePicker beginDateTimePicker1 = this.BeginDateTimePicker;
      point1 = new Point(80, 128);
      Point point9 = point1;
      beginDateTimePicker1.Location = point9;
      this.BeginDateTimePicker.Name = "BeginDateTimePicker";
      DateTimePicker beginDateTimePicker2 = this.BeginDateTimePicker;
      size1 = new Size(192, 20);
      Size size9 = size1;
      beginDateTimePicker2.Size = size9;
      this.BeginDateTimePicker.TabIndex = 7;
      DateTimePicker endDateTimePicker1 = this.EndDateTimePicker;
      point1 = new Point(80, 168);
      Point point10 = point1;
      endDateTimePicker1.Location = point10;
      this.EndDateTimePicker.Name = "EndDateTimePicker";
      DateTimePicker endDateTimePicker2 = this.EndDateTimePicker;
      size1 = new Size(192, 20);
      Size size10 = size1;
      endDateTimePicker2.Size = size10;
      this.EndDateTimePicker.TabIndex = 8;
      Label beginDateLabel1 = this.BeginDateLabel;
      point1 = new Point(8, 128);
      Point point11 = point1;
      beginDateLabel1.Location = point11;
      this.BeginDateLabel.Name = "BeginDateLabel";
      Label beginDateLabel2 = this.BeginDateLabel;
      size1 = new Size(64, 16);
      Size size11 = size1;
      beginDateLabel2.Size = size11;
      this.BeginDateLabel.TabIndex = 9;
      this.BeginDateLabel.Text = "Begin Day";
      Label endLabel1 = this.EndLabel;
      point1 = new Point(8, 168);
      Point point12 = point1;
      endLabel1.Location = point12;
      this.EndLabel.Name = "EndLabel";
      Label endLabel2 = this.EndLabel;
      size1 = new Size(64, 16);
      Size size12 = size1;
      endLabel2.Size = size12;
      this.EndLabel.TabIndex = 10;
      this.EndLabel.Text = "End Day";
      GroupBox groupBox1 = this.GroupBox;
      point1 = new Point(8, 240);
      Point point13 = point1;
      groupBox1.Location = point13;
      this.GroupBox.Name = "GroupBox";
      GroupBox groupBox2 = this.GroupBox;
      size1 = new Size(280, 88);
      Size size13 = size1;
      groupBox2.Size = size13;
      this.GroupBox.TabIndex = 11;
      this.GroupBox.TabStop = false;
      CheckBox seedCheckBox1 = this.SeedCheckBox;
      point1 = new Point(112, 48);
      Point point14 = point1;
      seedCheckBox1.Location = point14;
      this.SeedCheckBox.Name = "SeedCheckBox";
      CheckBox seedCheckBox2 = this.SeedCheckBox;
      size1 = new Size(160, 16);
      Size size14 = size1;
      seedCheckBox2.Size = size14;
      this.SeedCheckBox.TabIndex = 12;
      this.SeedCheckBox.Text = "Use Default Seed";
      CheckBox saveSeedCheckBox1 = this.SaveSeedCheckBox;
      point1 = new Point(112, 72);
      Point point15 = point1;
      saveSeedCheckBox1.Location = point15;
      this.SaveSeedCheckBox.Name = "SaveSeedCheckBox";
      CheckBox saveSeedCheckBox2 = this.SaveSeedCheckBox;
      size1 = new Size(160, 16);
      Size size15 = size1;
      saveSeedCheckBox2.Size = size15;
      this.SaveSeedCheckBox.TabIndex = 13;
      this.SaveSeedCheckBox.Text = "Save the Seed";
      Label label1_1 = this.Label1;
      point1 = new Point(8, 208);
      Point point16 = point1;
      label1_1.Location = point16;
      this.Label1.Name = "Label1";
      Label label1_2 = this.Label1;
      size1 = new Size(160, 23);
      Size size16 = size1;
      label1_2.Size = size16;
      this.Label1.TabIndex = 15;
      this.Label1.Text = "Number of Passwords (1-365)";
      this.Label1.TextAlign = ContentAlignment.MiddleLeft;
      TextBox numberOfPwdTextBox1 = this.numberOfPwdTextBox;
      point1 = new Point(168, 208);
      Point point17 = point1;
      numberOfPwdTextBox1.Location = point17;
      this.numberOfPwdTextBox.Name = "numberOfPwdTextBox";
      TextBox numberOfPwdTextBox2 = this.numberOfPwdTextBox;
      size1 = new Size(104, 20);
      Size size17 = size1;
      numberOfPwdTextBox2.Size = size17;
      this.numberOfPwdTextBox.TabIndex = 16;
      this.numberOfPwdTextBox.Text = "1";
      this.Panel1.Controls.Add((Control) this.GroupBox1);
      this.Panel1.Dock = DockStyle.Fill;
      Panel panel1_1 = this.Panel1;
      point1 = new Point(296, 0);
      Point point18 = point1;
      panel1_1.Location = point18;
      this.Panel1.Name = "Panel1";
      Panel panel1_2 = this.Panel1;
      size1 = new Size(304, 414);
      Size size18 = size1;
      panel1_2.Size = size18;
      this.Panel1.TabIndex = 17;
      this.GroupBox1.Controls.Add((Control) this.RichTextBox);
      this.GroupBox1.Dock = DockStyle.Fill;
      GroupBox groupBox1_1 = this.GroupBox1;
      point1 = new Point(0, 0);
      Point point19 = point1;
      groupBox1_1.Location = point19;
      this.GroupBox1.Name = "GroupBox1";
      GroupBox groupBox1_2 = this.GroupBox1;
      size1 = new Size(304, 414);
      Size size19 = size1;
      groupBox1_2.Size = size19;
      this.GroupBox1.TabIndex = 0;
      this.GroupBox1.TabStop = false;
      this.GroupBox1.Text = "Passwords Of The Day";
      this.RichTextBox.ContextMenu = this.passwordContextMenu;
      this.RichTextBox.Dock = DockStyle.Fill;
      this.RichTextBox.Font = new Font("Courier New", 8.25f, FontStyle.Regular, GraphicsUnit.Point, (byte) 0);
      RichTextBox richTextBox1 = this.RichTextBox;
      point1 = new Point(3, 16);
      Point point20 = point1;
      richTextBox1.Location = point20;
      this.RichTextBox.Name = "RichTextBox";
      RichTextBox richTextBox2 = this.RichTextBox;
      size1 = new Size(298, 395);
      Size size20 = size1;
      richTextBox2.Size = size20;
      this.RichTextBox.TabIndex = 1;
      this.RichTextBox.Text = "";
      this.passwordContextMenu.MenuItems.AddRange(new MenuItem[1]
      {
        this.copyAllMenuItem
      });
      this.copyAllMenuItem.Index = 0;
      this.copyAllMenuItem.Text = "Copy All";
      this.Panel2.Controls.Add((Control) this.browseButton);
      this.Panel2.Controls.Add((Control) this.pathTextBox);
      this.Panel2.Controls.Add((Control) this.Label2);
      this.Panel2.Dock = DockStyle.Left;
      Panel panel2_1 = this.Panel2;
      point1 = new Point(0, 0);
      Point point21 = point1;
      panel2_1.Location = point21;
      this.Panel2.Name = "Panel2";
      Panel panel2_2 = this.Panel2;
      size1 = new Size(296, 414);
      Size size21 = size1;
      panel2_2.Size = size21;
      this.Panel2.TabIndex = 18;
      Label label2_1 = this.Label2;
      point1 = new Point(8, 336);
      Point point22 = point1;
      label2_1.Location = point22;
      this.Label2.Name = "Label2";
      Label label2_2 = this.Label2;
      size1 = new Size(176, 23);
      Size size22 = size1;
      label2_2.Size = size22;
      this.Label2.TabIndex = 0;
      this.Label2.Text = "Path to save output password file";
      this.Label2.TextAlign = ContentAlignment.MiddleLeft;
      this.pathTextBox.BackColor = SystemColors.Window;
      TextBox pathTextBox1 = this.pathTextBox;
      point1 = new Point(8, 368);
      Point point23 = point1;
      pathTextBox1.Location = point23;
      this.pathTextBox.Name = "pathTextBox";
      TextBox pathTextBox2 = this.pathTextBox;
      size1 = new Size(216, 20);
      Size size23 = size1;
      pathTextBox2.Size = size23;
      this.pathTextBox.TabIndex = 1;
      this.pathTextBox.Text = "";
      Button browseButton1 = this.browseButton;
      point1 = new Point(232, 368);
      Point point24 = point1;
      browseButton1.Location = point24;
      this.browseButton.Name = "browseButton";
      Button browseButton2 = this.browseButton;
      size1 = new Size(56, 23);
      Size size24 = size1;
      browseButton2.Size = size24;
      this.browseButton.TabIndex = 2;
      this.browseButton.Text = "Browse";
      this.saveFileDialog.Filter = "Text files (*.txt)|*.txt";
      MainForm mainForm1 = this;
      size1 = new Size(5, 13);
      Size size25 = size1;
      mainForm1.AutoScaleBaseSize = size25;
      MainForm mainForm2 = this;
      size1 = new Size(600, 414);
      Size size26 = size1;
      mainForm2.ClientSize = size26;
      this.Controls.Add((Control) this.Panel1);
      this.Controls.Add((Control) this.numberOfPwdTextBox);
      this.Controls.Add((Control) this.Label1);
      this.Controls.Add((Control) this.SaveSeedCheckBox);
      this.Controls.Add((Control) this.SeedCheckBox);
      this.Controls.Add((Control) this.EndLabel);
      this.Controls.Add((Control) this.BeginDateLabel);
      this.Controls.Add((Control) this.EndDateTimePicker);
      this.Controls.Add((Control) this.BeginDateTimePicker);
      this.Controls.Add((Control) this.PasswordOfTheDayLabel);
      this.Controls.Add((Control) this.PasswordOfTheDayTextBox);
      this.Controls.Add((Control) this.CalculateButton);
      this.Controls.Add((Control) this.DESLabel);
      this.Controls.Add((Control) this.SeedLabel);
      this.Controls.Add((Control) this.DESBox);
      this.Controls.Add((Control) this.SeedBox);
      this.Controls.Add((Control) this.GroupBox);
      this.Controls.Add((Control) this.Panel2);
      this.Icon = (Icon) resourceManager.GetObject("$this.Icon");
      this.MaximizeBox = false;
      this.Name = "MainForm";
      this.StartPosition = FormStartPosition.CenterScreen;
      this.Text = "ARRIS Password of the day";
      this.Panel1.ResumeLayout(false);
      this.GroupBox1.ResumeLayout(false);
      this.Panel2.ResumeLayout(false);
      this.ResumeLayout(false);
    }

    private void MainForm_Load(object sender, EventArgs e)
    {
      this.pathTextBox.Text = FileSystem.CurDir() + "\\" + this.passwordFile;
      this.DESBox.Text = "";
      this.PasswordOfTheDayTextBox.Text = "";
      this.DES_file_name = FileSystem.CurDir() + "\\Password.dat";
      this.temp_file_name = FileSystem.CurDir() + "\\temp.txt";
      this.CalculateButton.Enabled = false;
      this.PasswordOfTheDayLabel.Enabled = false;
      this.PasswordOfTheDayTextBox.Enabled = false;
      this.EndDateTimePicker.MinDate = this.BeginDateTimePicker.Value;
      this.EndDateTimePicker.MaxDate = DateAndTime.DateAdd(DateInterval.Day, 365.0, this.BeginDateTimePicker.Value);
      try
      {
        if (!new FileInfo(this.DES_file_name).Exists)
          return;
      }
      catch (Exception ex)
      {
        ProjectData.SetProjectError(ex);
        ProjectData.ClearProjectError();
        return;
      }
      this.DecryptData("Password.dat", "temp.txt");
      try
      {
        FileInfo fileInfo = new FileInfo(this.temp_file_name);
        if (!fileInfo.Exists)
          return;
        this.temp_file_number = FileSystem.FreeFile();
        this.temp_file_buffer_len = checked ((int) fileInfo.Length);
        FileSystem.FileOpen(this.temp_file_number, this.temp_file_name, OpenMode.Binary, OpenAccess.ReadWrite, OpenShare.Default, this.temp_file_buffer_len);
      }
      catch (Exception ex)
      {
        ProjectData.SetProjectError(ex);
        ProjectData.ClearProjectError();
        return;
      }
      try
      {
        string str = Strings.Space(this.temp_file_buffer_len);
        FileSystem.FileGet(this.temp_file_number, ref str, -1L, false);
        this.SeedBox.Text = Strings.Trim(str);
        this.SaveSeedCheckBox.Checked = true;
        MainForm mainForm = this;
        long num1 = 1L;
        long num2 = (long) this.temp_file_buffer_len;
        mainForm.longi = num1;
        while (this.longi <= num2)
        {
          FileSystem.FilePut(this.temp_file_number, 0, this.longi);
          checked { ++this.longi; }
        }
        FileSystem.FileClose(new int[1]
        {
          this.temp_file_number
        });
        FileSystem.Kill(this.temp_file_name);
      }
      catch (Exception ex1)
      {
        ProjectData.SetProjectError(ex1);
        try
        {
          MainForm mainForm = this;
          long num1 = 1L;
          long num2 = (long) this.temp_file_buffer_len;
          mainForm.longi = num1;
          while (this.longi <= num2)
          {
            FileSystem.FilePut(this.temp_file_number, 0, this.longi);
            checked { ++this.longi; }
          }
          FileSystem.FileClose(new int[1]
          {
            this.temp_file_number
          });
          FileSystem.Kill(this.temp_file_name);
        }
        catch (Exception ex2)
        {
          ProjectData.SetProjectError(ex2);
          ProjectData.ClearProjectError();
          return;
        }
        ProjectData.ClearProjectError();
      }
    }

    private void CalculateButton_Click(object sender, EventArgs e)
    {
      this.DESBox.Text = "";
      this.PasswordOfTheDayTextBox.Text = "";
      if (this.SeedCheckBox.Checked)
      {
        this.seedeight = Strings.Trim(Strings.Mid(this.defseed, 1, 8));
        this.seedten = Strings.Trim(this.defseed);
      }
      else
      {
        this.DESseed = Strings.Trim(this.SeedBox.Text);
        this.seedeight = Strings.Trim(this.SeedBox.Text);
        this.seedten = Strings.Trim(this.SeedBox.Text);
        if (Strings.Len(this.seedeight) < 8)
        {
          this.i = 1;
          while (Strings.Len(this.seedeight) < 8)
          {
            this.DESseed = this.DESseed + "\0";
            this.seedeight = this.seedeight + Strings.Mid(this.seedeight, this.i, 1);
            this.i = checked (this.i + 1);
          }
        }
        if (Strings.Len(this.seedten) < 10)
        {
          this.i = 1;
          while (Strings.Len(this.seedten) < 10)
          {
            this.seedten = this.seedten + Strings.Mid(this.seedten, this.i, 1);
            this.i = checked (this.i + 1);
          }
        }
        this.EncryptData(this.DESseed, "Password.dat");
      }
      this.CalculatePasswordOfTheDay();
    }

    public void EncryptData(string inName, string outName)
    {
      FileStream fileStream = new FileStream(outName, FileMode.OpenOrCreate, FileAccess.Write);
      fileStream.SetLength(0L);
      this.desKey[0] = (byte) 20;
      this.desKey[1] = (byte) 157;
      this.desKey[2] = (byte) 64;
      this.desKey[3] = (byte) 213;
      this.desKey[4] = (byte) 193;
      this.desKey[5] = (byte) 46;
      this.desKey[6] = (byte) 85;
      this.desKey[7] = (byte) 2;
      this.desIV[0] = (byte) 0;
      this.desIV[1] = (byte) 0;
      this.desIV[2] = (byte) 0;
      this.desIV[3] = (byte) 0;
      this.desIV[4] = (byte) 0;
      this.desIV[5] = (byte) 0;
      this.desIV[6] = (byte) 0;
      this.desIV[7] = (byte) 0;
      byte[] buffer = new byte[8];
      long num1 = 8L;
      long num2 = (long) inName.Length;
      DESCryptoServiceProvider cryptoServiceProvider = new DESCryptoServiceProvider();
      cryptoServiceProvider.Mode = CipherMode.CBC;
      cryptoServiceProvider.Padding = PaddingMode.None;
      CryptoStream cryptoStream = new CryptoStream((Stream) fileStream, cryptoServiceProvider.CreateEncryptor(this.desKey, this.desIV), CryptoStreamMode.Write);
      this.i = 0;
      do
      {
        buffer[this.i] = checked ((byte) Strings.Asc(Strings.Mid(inName, this.i + 1, 1)));
        checked { ++this.i; }
      }
      while (this.i <= 7);
      for (; num1 <= num2; {
        int count;
        num1 = (long) Convert.ToInt32((double) num1 + (double) count / (double) cryptoServiceProvider.BlockSize * (double) cryptoServiceProvider.BlockSize);
      }
      )
      {
        count = 8;
        cryptoStream.Write(buffer, 0, count);
      }
      cryptoStream.Close();
      fileStream.Close();
      cryptoStream.Clear();
      cryptoServiceProvider.Clear();
      try
      {
        this.DES_file_name = FileSystem.CurDir() + "\\Password.dat";
        FileInfo fileInfo = new FileInfo(this.DES_file_name);
        if (!fileInfo.Exists)
        {
          int num3 = (int) Interaction.MsgBox((object) ("DES output file : " + this.DES_file_name + " does not exist in the local directory"), MsgBoxStyle.OkOnly, (object) null);
        }
        this.DES_file_number = FileSystem.FreeFile();
        this.DES_file_buffer_len = checked ((int) fileInfo.Length);
        FileSystem.FileOpen(this.DES_file_number, this.DES_file_name, OpenMode.Binary, OpenAccess.Read, OpenShare.Default, this.DES_file_buffer_len);
      }
      catch (Exception ex)
      {
        ProjectData.SetProjectError(ex);
        int num3 = (int) Interaction.MsgBox((object) ("Unable to open DES output file " + this.DES_file_name), MsgBoxStyle.OkOnly, (object) null);
        ProjectData.ClearProjectError();
      }
      try
      {
        FileSystem.FileGet(this.DES_file_number, ref this.DES_file_string_bytes, -1L, false);
        this.DESBox.Text = "";
        MainForm mainForm = this;
        int num3 = 0;
        int num4 = checked (this.DES_file_buffer_len - 2);
        mainForm.i = num3;
        while (this.i <= num4)
        {
          if (Strings.Len(Conversion.Hex(Strings.Asc(Strings.Mid(this.DES_file_string_bytes, checked (this.i + 1), 1)))) == 2)
          {
            TextBox desBox = this.DESBox;
            desBox.Text = desBox.Text + Conversion.Hex(Strings.Asc(Strings.Mid(this.DES_file_string_bytes, checked (this.i + 1), 1))) + ".";
          }
          else
          {
            TextBox desBox = this.DESBox;
            desBox.Text = desBox.Text + "0" + Conversion.Hex(Strings.Asc(Strings.Mid(this.DES_file_string_bytes, checked (this.i + 1), 1))) + ".";
          }
          checked { ++this.i; }
        }
        if (Strings.Len(Conversion.Hex(Strings.Asc(Strings.Mid(this.DES_file_string_bytes, this.DES_file_buffer_len, 1)))) == 2)
        {
          TextBox desBox = this.DESBox;
          desBox.Text = desBox.Text + Conversion.Hex(Strings.Asc(Strings.Mid(this.DES_file_string_bytes, this.DES_file_buffer_len, 1)));
        }
        else
        {
          TextBox desBox = this.DESBox;
          desBox.Text = desBox.Text + "0" + Conversion.Hex(Strings.Asc(Strings.Mid(this.DES_file_string_bytes, this.DES_file_buffer_len, 1)));
        }
        try
        {
          FileSystem.FileClose(new int[1]
          {
            this.DES_file_number
          });
        }
        catch (Exception ex)
        {
          ProjectData.SetProjectError(ex);
          int num5 = (int) Interaction.MsgBox((object) ("Unable to close DES encoded output file " + this.DES_file_name), MsgBoxStyle.OkOnly, (object) null);
          ProjectData.ClearProjectError();
        }
      }
      catch (Exception ex1)
      {
        ProjectData.SetProjectError(ex1);
        int num3 = (int) Interaction.MsgBox((object) ("Error reading password file " + this.DES_file_name), MsgBoxStyle.OkOnly, (object) null);
        try
        {
          FileSystem.FileClose(new int[1]
          {
            this.DES_file_number
          });
        }
        catch (Exception ex2)
        {
          ProjectData.SetProjectError(ex2);
          int num4 = (int) Interaction.MsgBox((object) ("Unable to close DES encoded password file " + this.DES_file_name), MsgBoxStyle.OkOnly, (object) null);
          ProjectData.ClearProjectError();
        }
        ProjectData.ClearProjectError();
      }
      if (this.SaveSeedCheckBox.Checked)
        return;
      try
      {
        FileSystem.Kill(this.DES_file_name);
      }
      catch (Exception ex)
      {
        ProjectData.SetProjectError(ex);
        ProjectData.ClearProjectError();
      }
    }

    public void DecryptData(string inName, string outName)
    {
      FileStream fileStream1 = new FileStream(inName, FileMode.Open, FileAccess.Read);
      FileStream fileStream2 = new FileStream(outName, FileMode.OpenOrCreate, FileAccess.Write);
      fileStream2.SetLength(0L);
      this.desKey[0] = (byte) 20;
      this.desKey[1] = (byte) 157;
      this.desKey[2] = (byte) 64;
      this.desKey[3] = (byte) 213;
      this.desKey[4] = (byte) 193;
      this.desKey[5] = (byte) 46;
      this.desKey[6] = (byte) 85;
      this.desKey[7] = (byte) 2;
      this.desIV[0] = (byte) 0;
      this.desIV[1] = (byte) 0;
      this.desIV[2] = (byte) 0;
      this.desIV[3] = (byte) 0;
      this.desIV[4] = (byte) 0;
      this.desIV[5] = (byte) 0;
      this.desIV[6] = (byte) 0;
      this.desIV[7] = (byte) 0;
      byte[] numArray = new byte[8];
      long num = 8L;
      long length = fileStream1.Length;
      DESCryptoServiceProvider cryptoServiceProvider = new DESCryptoServiceProvider();
      cryptoServiceProvider.Mode = CipherMode.CBC;
      cryptoServiceProvider.Padding = PaddingMode.None;
      CryptoStream cryptoStream = new CryptoStream((Stream) fileStream2, cryptoServiceProvider.CreateDecryptor(this.desKey, this.desIV), CryptoStreamMode.Write);
      for (; num <= length; {
        int count;
        num = (long) Convert.ToInt32((double) num + (double) count / (double) cryptoServiceProvider.BlockSize * (double) cryptoServiceProvider.BlockSize);
      }
      )
      {
        count = fileStream1.Read(numArray, 0, 8);
        cryptoStream.Write(numArray, 0, count);
      }
      cryptoStream.Close();
      fileStream1.Close();
      fileStream2.Close();
      cryptoStream.Clear();
      cryptoServiceProvider.Clear();
    }

    private void SeedBox_TextChanged(object sender, EventArgs e)
    {
      if (Strings.Len(this.SeedBox.Text) > 3)
      {
        if (Strings.Trim(this.SeedBox.Text).Length <= 0)
          return;
        this.CalculateButton.Enabled = true;
        this.PasswordOfTheDayLabel.Enabled = true;
        this.PasswordOfTheDayTextBox.Enabled = true;
      }
      else
      {
        this.CalculateButton.Enabled = false;
        this.PasswordOfTheDayLabel.Enabled = false;
        this.PasswordOfTheDayTextBox.Enabled = false;
      }
    }

    private void BeginDateTimePicker_ValueChanged(object sender, EventArgs e)
    {
      if (DateTime.Compare(this.BeginDateTimePicker.Value, this.EndDateTimePicker.MaxDate) > 0)
      {
        this.EndDateTimePicker.MaxDate = DateAndTime.DateAdd(DateInterval.Day, 30.0, this.BeginDateTimePicker.Value);
        this.EndDateTimePicker.Value = this.BeginDateTimePicker.Value;
        this.EndDateTimePicker.MinDate = this.BeginDateTimePicker.Value;
      }
      else if (DateTime.Compare(this.BeginDateTimePicker.Value, this.EndDateTimePicker.MinDate) < 0)
      {
        this.EndDateTimePicker.MinDate = this.BeginDateTimePicker.Value;
        this.EndDateTimePicker.Value = this.BeginDateTimePicker.Value;
        this.EndDateTimePicker.MaxDate = DateAndTime.DateAdd(DateInterval.Day, 30.0, this.BeginDateTimePicker.Value);
      }
      else
      {
        this.EndDateTimePicker.MaxDate = DateAndTime.DateAdd(DateInterval.Day, 30.0, this.BeginDateTimePicker.Value);
        this.EndDateTimePicker.MinDate = this.BeginDateTimePicker.Value;
        this.EndDateTimePicker.Value = this.BeginDateTimePicker.Value;
      }
    }

    private void SeedCheckBox_CheckedChanged(object sender, EventArgs e)
    {
      if (this.SeedCheckBox.Checked)
      {
        this.SeedBox.Enabled = false;
        this.DESBox.Enabled = false;
        this.CalculateButton.Enabled = true;
        this.PasswordOfTheDayLabel.Enabled = true;
        this.PasswordOfTheDayTextBox.Enabled = true;
      }
      else
      {
        this.SeedBox.Enabled = true;
        this.DESBox.Enabled = true;
        if (Strings.Len(this.SeedBox.Text) > 3)
        {
          this.CalculateButton.Enabled = true;
          this.PasswordOfTheDayLabel.Enabled = true;
          this.PasswordOfTheDayTextBox.Enabled = true;
        }
        else
        {
          this.CalculateButton.Enabled = false;
          this.PasswordOfTheDayLabel.Enabled = false;
          this.PasswordOfTheDayTextBox.Enabled = false;
        }
      }
    }

    public void CalculatePasswordOfTheDay()
    {
      byte[,] numArray1 = new byte[7, 5]
      {
        {
          (byte) 15,
          (byte) 15,
          (byte) 24,
          (byte) 20,
          (byte) 24
        },
        {
          (byte) 13,
          (byte) 14,
          (byte) 27,
          (byte) 32,
          (byte) 10
        },
        {
          (byte) 29,
          (byte) 14,
          (byte) 32,
          (byte) 29,
          (byte) 24
        },
        {
          (byte) 23,
          (byte) 32,
          (byte) 24,
          (byte) 29,
          (byte) 29
        },
        {
          (byte) 14,
          (byte) 29,
          (byte) 10,
          (byte) 21,
          (byte) 29
        },
        {
          (byte) 34,
          (byte) 27,
          (byte) 16,
          (byte) 23,
          (byte) 30
        },
        {
          (byte) 14,
          (byte) 22,
          (byte) 24,
          (byte) 17,
          (byte) 13
        }
      };
      byte[,] numArray2 = new byte[6, 10]
      {
        {
          (byte) 0,
          (byte) 1,
          (byte) 2,
          (byte) 9,
          (byte) 3,
          (byte) 4,
          (byte) 5,
          (byte) 6,
          (byte) 7,
          (byte) 8
        },
        {
          (byte) 1,
          (byte) 4,
          (byte) 3,
          (byte) 9,
          (byte) 0,
          (byte) 7,
          (byte) 8,
          (byte) 2,
          (byte) 5,
          (byte) 6
        },
        {
          (byte) 7,
          (byte) 2,
          (byte) 8,
          (byte) 9,
          (byte) 4,
          (byte) 1,
          (byte) 6,
          (byte) 0,
          (byte) 3,
          (byte) 5
        },
        {
          (byte) 6,
          (byte) 3,
          (byte) 5,
          (byte) 9,
          (byte) 1,
          (byte) 8,
          (byte) 2,
          (byte) 7,
          (byte) 4,
          (byte) 0
        },
        {
          (byte) 4,
          (byte) 7,
          (byte) 0,
          (byte) 9,
          (byte) 5,
          (byte) 2,
          (byte) 3,
          (byte) 1,
          (byte) 8,
          (byte) 6
        },
        {
          (byte) 5,
          (byte) 6,
          (byte) 1,
          (byte) 9,
          (byte) 8,
          (byte) 0,
          (byte) 4,
          (byte) 3,
          (byte) 2,
          (byte) 7
        }
      };
      char[] chArray = new char[36]
      {
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      };
      byte[] numArray3 = new byte[11];
      byte[] numArray4 = new byte[11];
      byte[] numArray5 = new byte[11];
      byte[] numArray6 = new byte[11];
      byte[] numArray7 = new byte[11];
      bool flag1 = true;
      bool flag2 = false;
      if (!this.GetDates())
        return;
      if (this.numOfPwd < 1 | this.numOfPwd > 365)
      {
        int num1 = (int) MessageBox.Show("Number of passwords must be between 1 and 365.", "Number of Passwords Error");
      }
      else
      {
        this.RichTextBox.Clear();
        int num2 = 1;
        int num3 = this.numOfPwd;
        int num4 = num2;
        string text;
        int FileNumber;
        while (num4 <= num3)
        {
          int num5 = Conversions.ToInteger(Strings.Mid(Conversions.ToString(DateAndTime.DatePart(DateInterval.Year, this.begindate, FirstDayOfWeek.Sunday, FirstWeekOfYear.Jan1)), 3, 2));
          int num6 = DateAndTime.DatePart(DateInterval.Month, this.begindate, FirstDayOfWeek.Sunday, FirstWeekOfYear.Jan1);
          int num7 = DateAndTime.DatePart(DateInterval.Day, this.begindate, FirstDayOfWeek.Sunday, FirstWeekOfYear.Jan1);
          int index = checked (DateAndTime.Weekday(this.begindate, FirstDayOfWeek.Monday) - 1);
          numArray3[0] = numArray1[index, 0];
          numArray3[1] = numArray1[index, 1];
          numArray3[2] = numArray1[index, 2];
          numArray3[3] = numArray1[index, 3];
          numArray3[4] = numArray1[index, 4];
          numArray3[5] = checked ((byte) num7);
          numArray3[6] = checked (num5 + num6 - num7) >= 0 ? checked ((byte) unchecked (checked (num5 + num6 - num7) % 36)) : checked ((byte) unchecked (checked (num5 + num6 - num7 + 36) % 36));
          numArray3[7] = checked ((byte) unchecked (checked (3 + unchecked (checked (num5 + num6) % 12) * num7) % 37 % 36));
          numArray4[0] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 1, 1)) % 36));
          numArray4[1] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 2, 1)) % 36));
          numArray4[2] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 3, 1)) % 36));
          numArray4[3] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 4, 1)) % 36));
          numArray4[4] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 5, 1)) % 36));
          numArray4[5] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 6, 1)) % 36));
          numArray4[6] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 7, 1)) % 36));
          numArray4[7] = checked ((byte) unchecked (Strings.Asc(Strings.Mid(this.seedeight, 8, 1)) % 36));
          numArray5[0] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[0] + (int) numArray4[0])) % 36));
          numArray5[1] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[1] + (int) numArray4[1])) % 36));
          numArray5[2] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[2] + (int) numArray4[2])) % 36));
          numArray5[3] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[3] + (int) numArray4[3])) % 36));
          numArray5[4] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[4] + (int) numArray4[4])) % 36));
          numArray5[5] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[5] + (int) numArray4[5])) % 36));
          numArray5[6] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[6] + (int) numArray4[6])) % 36));
          numArray5[7] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray3[7] + (int) numArray4[7])) % 36));
          numArray5[8] = checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) checked ((byte) unchecked ((int) numArray5[0] + (int) numArray5[1])) + (int) numArray5[2])) + (int) numArray5[3])) + (int) numArray5[4])) + (int) numArray5[5])) + (int) numArray5[6])) + (int) numArray5[7])) % 36));
          byte num8 = checked ((byte) unchecked ((int) numArray5[8] % 6));
          numArray5[9] = checked ((byte) Math.Round(Math.Pow(unchecked ((double) num8), 2.0)));
          numArray6[0] = numArray5[(int) numArray2[(int) num8, 0]];
          numArray6[1] = numArray5[(int) numArray2[(int) num8, 1]];
          numArray6[2] = numArray5[(int) numArray2[(int) num8, 2]];
          numArray6[3] = numArray5[(int) numArray2[(int) num8, 3]];
          numArray6[4] = numArray5[(int) numArray2[(int) num8, 4]];
          numArray6[5] = numArray5[(int) numArray2[(int) num8, 5]];
          numArray6[6] = numArray5[(int) numArray2[(int) num8, 6]];
          numArray6[7] = numArray5[(int) numArray2[(int) num8, 7]];
          numArray6[8] = numArray5[(int) numArray2[(int) num8, 8]];
          numArray6[9] = numArray5[(int) numArray2[(int) num8, 9]];
          numArray7[0] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 1, 1)) + (int) numArray6[0]) % 36));
          numArray7[1] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 2, 1)) + (int) numArray6[1]) % 36));
          numArray7[2] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 3, 1)) + (int) numArray6[2]) % 36));
          numArray7[3] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 4, 1)) + (int) numArray6[3]) % 36));
          numArray7[4] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 5, 1)) + (int) numArray6[4]) % 36));
          numArray7[5] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 6, 1)) + (int) numArray6[5]) % 36));
          numArray7[6] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 7, 1)) + (int) numArray6[6]) % 36));
          numArray7[7] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 8, 1)) + (int) numArray6[7]) % 36));
          numArray7[8] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 9, 1)) + (int) numArray6[8]) % 36));
          numArray7[9] = checked ((byte) unchecked (checked (Strings.Asc(Strings.Mid(this.seedten, 10, 1)) + (int) numArray6[9]) % 36));
          string str1 = Conversions.ToString(chArray[(int) numArray7[0]]) + Conversions.ToString(chArray[(int) numArray7[1]]) + Conversions.ToString(chArray[(int) numArray7[2]]) + Conversions.ToString(chArray[(int) numArray7[3]]) + Conversions.ToString(chArray[(int) numArray7[4]]) + Conversions.ToString(chArray[(int) numArray7[5]]) + Conversions.ToString(chArray[(int) numArray7[6]]) + Conversions.ToString(chArray[(int) numArray7[7]]) + Conversions.ToString(chArray[(int) numArray7[8]]) + Conversions.ToString(chArray[(int) numArray7[9]]);
          Clipboard.SetDataObject((object) str1);
          string Expression = Strings.Format((object) num6, "0#") + "/" + Strings.Format((object) num7, "0#") + "/" + Strings.Format((object) num5, "0#");
          if (flag1)
          {
            flag1 = false;
            this.PasswordOfTheDayTextBox.Text = str1;
            if (this.numOfPwd >= 1 | this.manualEnter)
            {
              flag2 = true;
              try
              {
                text = this.pathTextBox.Text;
                if (new FileInfo(text).Exists)
                {
                  try
                  {
                    FileSystem.Kill(text);
                  }
                  catch (Exception ex)
                  {
                    ProjectData.SetProjectError(ex);
                    ProjectData.ClearProjectError();
                  }
                }
                FileNumber = FileSystem.FreeFile();
                FileSystem.FileOpen(FileNumber, text, OpenMode.Binary, OpenAccess.Write, OpenShare.LockWrite, -1);
                string str2 = "Date";
                MainForm mainForm1 = this;
                int num9 = 1;
                int num10 = checked (Strings.Len(Expression) - 4);
                mainForm1.i = num9;
                while (this.i <= num10)
                {
                  str2 = str2 + " ";
                  checked { ++this.i; }
                }
                string str3 = str2 + ": " + "Password of the Day";
                MainForm mainForm2 = this;
                int num11 = 1;
                int num12 = Strings.Len(str3);
                mainForm2.i = num11;
                while (this.i <= num12)
                {
                  byte num13 = checked ((byte) Strings.Asc(Strings.Mid(str3, this.i, 1)));
                  FileSystem.FilePut(FileNumber, num13, -1L);
                  checked { ++this.i; }
                }
                FileSystem.FilePut(FileNumber, "\r\n", -1L, false);
                this.RichTextBox.AppendText(str3 + "\r\n");
                MainForm mainForm3 = this;
                int num14 = 1;
                int num15 = Strings.Len(str3);
                mainForm3.i = num14;
                while (this.i <= num15)
                {
                  byte num13 = (byte) 45;
                  FileSystem.FilePut(FileNumber, num13, -1L);
                  this.RichTextBox.AppendText("-");
                  checked { ++this.i; }
                }
                FileSystem.FilePut(FileNumber, "\r\n", -1L, false);
                this.RichTextBox.AppendText("\r\n");
              }
              catch (Exception ex)
              {
                ProjectData.SetProjectError(ex);
                flag2 = false;
                int num9 = (int) Interaction.MsgBox((object) ("Unable to open the Password of the Day output file " + text), MsgBoxStyle.OkOnly, (object) null);
                ProjectData.ClearProjectError();
              }
            }
          }
          if (flag2)
          {
            try
            {
              string str2 = Expression + ": " + str1;
              MainForm mainForm = this;
              int num9 = 1;
              int num10 = Strings.Len(str2);
              mainForm.i = num9;
              while (this.i <= num10)
              {
                byte num11 = checked ((byte) Strings.Asc(Strings.Mid(str2, this.i, 1)));
                FileSystem.FilePut(FileNumber, num11, -1L);
                checked { ++this.i; }
              }
              FileSystem.FilePut(FileNumber, "\r\n", -1L, false);
              this.RichTextBox.AppendText(str2 + "\r\n");
            }
            catch (Exception ex1)
            {
              ProjectData.SetProjectError(ex1);
              int num9 = (int) Interaction.MsgBox((object) ("Error writing to Password of the Day file " + text), MsgBoxStyle.OkOnly, (object) null);
              try
              {
                FileSystem.FileClose(new int[1]
                {
                  FileNumber
                });
                flag2 = false;
              }
              catch (Exception ex2)
              {
                ProjectData.SetProjectError(ex2);
                int num10 = (int) Interaction.MsgBox((object) ("Unable to close the Password of the Day file " + text), MsgBoxStyle.OkOnly, (object) null);
                ProjectData.ClearProjectError();
              }
              ProjectData.ClearProjectError();
            }
          }
          this.begindate = DateAndTime.DateAdd(DateInterval.Day, 1.0, this.begindate);
          checked { ++num4; }
        }
        if (!flag2)
          return;
        try
        {
          FileSystem.FileClose(new int[1]
          {
            FileNumber
          });
        }
        catch (Exception ex)
        {
          ProjectData.SetProjectError(ex);
          int num5 = (int) Interaction.MsgBox((object) ("Unable to close the Password of the Day output file " + text), MsgBoxStyle.OkOnly, (object) null);
          ProjectData.ClearProjectError();
        }
      }
    }

    private void SaveSeedCheckBox_CheckedChanged(object sender, EventArgs e)
    {
      if (this.SaveSeedCheckBox.Checked)
        return;
      try
      {
        FileInfo fileInfo = new FileInfo(this.DES_file_name);
        if (!fileInfo.Exists)
          return;
        this.DES_file_number = FileSystem.FreeFile();
        this.DES_file_buffer_len = checked ((int) fileInfo.Length);
        FileSystem.FileOpen(this.DES_file_number, this.DES_file_name, OpenMode.Binary, OpenAccess.ReadWrite, OpenShare.Default, this.DES_file_buffer_len);
      }
      catch (Exception ex)
      {
        ProjectData.SetProjectError(ex);
        ProjectData.ClearProjectError();
        return;
      }
      try
      {
        MainForm mainForm = this;
        long num1 = 1L;
        long num2 = (long) this.DES_file_buffer_len;
        mainForm.longi = num1;
        while (this.longi <= num2)
        {
          FileSystem.FilePut(this.DES_file_number, 0, this.longi);
          checked { ++this.longi; }
        }
        FileSystem.FileClose(new int[1]
        {
          this.DES_file_number
        });
        FileSystem.Kill(this.DES_file_name);
      }
      catch (Exception ex1)
      {
        ProjectData.SetProjectError(ex1);
        try
        {
          MainForm mainForm = this;
          long num1 = 1L;
          long num2 = (long) this.DES_file_buffer_len;
          mainForm.longi = num1;
          while (this.longi <= num2)
          {
            FileSystem.FilePut(this.DES_file_number, 0, this.longi);
            checked { ++this.longi; }
          }
          FileSystem.FileClose(new int[1]
          {
            this.DES_file_number
          });
          FileSystem.Kill(this.DES_file_name);
        }
        catch (Exception ex2)
        {
          ProjectData.SetProjectError(ex2);
          ProjectData.ClearProjectError();
          return;
        }
        ProjectData.ClearProjectError();
      }
    }

    private void EndDateTimePicker_CloseUp(object sender, EventArgs e)
    {
      this.manualEnter = false;
      this.GetDates();
    }

    private void BeginDateTimePicker_CloseUp(object sender, EventArgs e)
    {
      this.manualEnter = false;
      this.GetDates();
    }

    private bool GetDates()
    {
      this.begindate = !Information.IsDate((object) this.BeginDateTimePicker.Value) ? DateAndTime.DateValue(DateAndTime.DateString) : DateAndTime.DateValue(Conversions.ToString(this.BeginDateTimePicker.Value));
      this.enddate = !Information.IsDate((object) this.EndDateTimePicker.Value) ? DateAndTime.DateValue(DateAndTime.DateString) : DateAndTime.DateValue(Conversions.ToString(this.EndDateTimePicker.Value));
      if (!this.manualEnter)
      {
        this.numOfPwd = checked ((int) (DateAndTime.DateDiff(DateInterval.Day, this.begindate, this.enddate, FirstDayOfWeek.Sunday, FirstWeekOfYear.Jan1) + 1L));
        this.numberOfPwdTextBox.Text = this.numOfPwd.ToString();
        return true;
      }
      else
      {
        bool flag;
        try
        {
          this.numOfPwd = int.Parse(this.numberOfPwdTextBox.Text);
          flag = true;
        }
        catch (Exception ex)
        {
          ProjectData.SetProjectError(ex);
          int num = (int) MessageBox.Show("Invalid number of passwords " + this.numberOfPwdTextBox.Text);
          flag = false;
          ProjectData.ClearProjectError();
        }
        return flag;
      }
    }

    private void Panel2_Paint(object sender, PaintEventArgs e)
    {
    }

    private void PasswordOfTheDayTextBox_TextChanged(object sender, EventArgs e)
    {
    }

    private void PasswordOfTheDayLabel_Click(object sender, EventArgs e)
    {
    }

    private void GroupBox_Enter(object sender, EventArgs e)
    {
    }

    private void numberOfPwdTextBox_KeyPress(object sender, KeyPressEventArgs e)
    {
      this.manualEnter = true;
    }

    private void copyAllMenuItem_Click(object sender, EventArgs e)
    {
      Clipboard.SetDataObject((object) this.RichTextBox.Text);
    }

    private void browseButton_Click(object sender, EventArgs e)
    {
      if (this.saveFileDialog.ShowDialog() != DialogResult.OK)
        return;
      try
      {
        this.pathTextBox.Text = this.saveFileDialog.FileName;
      }
      catch (Exception ex)
      {
        ProjectData.SetProjectError(ex);
        ProjectData.ClearProjectError();
      }
    }
  }
}
